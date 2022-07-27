import Layout from "../components/Layout/Layout";
import Textarea from "../components/Textarea/Textarea";
import {useEffect, useState} from "react";
import Button from "../components/Button/Button";
import {useRouter} from "next/router";
import postsController from "../db/controllers/posts.controller";
import Loading from "../components/Loading/Loading";

export default function CreatePost() {
    const [title, changeTitle] = useState("");
    const [description, changeDescription] = useState("");
    const [content, changeContent] = useState("");
    const [isLoading, changeIsLoading] = useState(false);

    const router = useRouter();

    const publishPost = (e) => {
        const date = (new Date()).getUTCDate();

        changeIsLoading(true);
        postsController.post({
            title, content, description, date
        }).then(() => {
            changeIsLoading(false);
            router.replace('/pages')
        })

        e.preventDefault();
    }
    // todo: Уведомление об успешном добавлении либо крутилку

    useEffect(() => {
        // ignore
    }, [isLoading])

    if (isLoading) {
        return (
            <Layout title={"creating post"}>
                <Loading />
            </Layout>
        )
    }

    return (
        <Layout
            hideCreatePostButton={true}
            title={"create post"}>
            <form  onSubmit={publishPost}>
                <Layout.Linear
                    orientation={"horizontal"}
                    style={{paddingBottom: "16px"}}>
                    <Button.RedirectToHome />
                    <Button.Submit>Publish</Button.Submit>
                </Layout.Linear>
                <Layout.Linear
                    orientation={"vertical"}
                >
                    {/*todo: add react utils*/}
                    <Textarea
                        key={1}
                        value={title}
                        onChange={(e) => changeTitle(e.target.value)}
                        hint={"title"}
                    />
                    <Textarea
                        key={2}
                        value={description}
                        onChange={(e) => changeDescription(e.target.value)}
                        hint={"description"}
                    />
                    <Textarea
                        key={3}
                        value={content}
                        onChange={(e) => changeContent(e.target.value)}
                        hint={"content"}
                    />
                </Layout.Linear>
            </form>
        </Layout>
    )
}