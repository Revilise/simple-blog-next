import Layout from "../components/Layout/Layout";
import {useEffect, useState} from "react";
import Button from "../components/Button/Button";
import {useRouter} from "next/router";
import postsController from "../db/controllers/posts.controller";
import Loading from "../components/Loading/Loading";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Textarea from "../components/Textarea/Textarea";
import {P, SpanLink} from "../components/SpecialTegs/SpecialTags";
import Link from "../components/Link/Link";

export default function CreatePost() {
    const [title, changeTitle] = useState("");
    const [description, changeDescription] = useState("");
    const [content, changeContent] = useState("");
    const [isLoading, changeIsLoading] = useState(false);

    const router = useRouter();

    const publishPost = (e) => {
        e.preventDefault();

        changeIsLoading(true);
        postsController.post({
            title, content, description
        }).then(() => {
            router.push('/')
        })
    }

    useEffect(() => {
        // ignore
    }, [isLoading])

    if (isLoading) {
        return (
            <Layout title={"creating post"}>
                <Loading/>
            </Layout>
        )
    }

    return (
        <Layout title={"create post"}>
            <Header>
                <Link.Button href={'/pages'}>back</Link.Button>
            </Header>
            <Main>
                <Main.Section>
                    <Layout.Container>
                        <Textarea placeholder={'Title'} type={"title"} value={title} changeHandle={changeTitle}/>
                        <Textarea placeholder={'Description'} value={description} changeHandle={changeDescription}/>
                        <Textarea placeholder={'Begin imagine!'} value={content} changeHandle={changeContent}/>
                    </Layout.Container>
                </Main.Section>
                <Main.Aside>
                    <Layout.Container>
                        <Button onClick={publishPost}>publish</Button>
                        <P>save in
                            <SpanLink href={''}> drafts</SpanLink>
                        </P>
                    </Layout.Container>
                    <P>
                        <SpanLink href={''}>
                            Rules of publication
                        </SpanLink>
                    </P>
                </Main.Aside>
            </Main>
        </Layout>
    )
}