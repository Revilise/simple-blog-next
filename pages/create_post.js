import Layout from "../components/Layout/Layout";
import Textarea from "../components/Textarea/Textarea";
import {useState} from "react";
import Button from "../components/Button/Button";
import {useRouter} from "next/router";
import postsController from "../db/controllers/posts.controller";

export default function CreatePost() {
    const [title, changeTitle] = useState("");
    const [description, changeDescription] = useState("");
    const [content, changeContent] = useState("");

    const router = useRouter();

    const publishPost = (e) => {
        const date = (new Date()).getUTCDate();

        postsController.post({
            title, content, description, date
        }).then(() => redirectToHome())

        e.preventDefault();
    }
    function redirectToHome() {
        router.replace('/pages')
    }
    return (
        <Layout
            hideCreatePostButton={true}
            title={"create post"}>
            <form  onSubmit={publishPost}>
                <Layout.Linear
                    orientation={"horizontal"}
                    style={{paddingBottom: "16px"}}>
                    <Button onClick={redirectToHome}>Come back</Button>
                    <Button.Submit>Publish</Button.Submit>
                </Layout.Linear>
                <Layout.Linear
                    orientation={"vertical"}
                >
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