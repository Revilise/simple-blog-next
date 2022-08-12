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
import {Editor, EditorState, RichUtils, convertToRaw} from "draft-js";
import 'draft-js/dist/Draft.css';

export default function CreatePost() {
    const router = useRouter();

    const [title, changeTitle] = useState("");
    const [isLoading, changeIsLoading] = useState(false);
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    );

    const publishPost = (e) => {
        e.preventDefault();
        changeIsLoading(true);

        const content = convertToRaw(editorState.getCurrentContent());

        postsController.post({
            title, content
        }).then(() => {
            router.push('/')
        })
    }

    useEffect(() => {}, [isLoading])

    if (isLoading) {
        return (
            <Layout title={"creating post"}>
                <Loading/>
            </Layout>
        )
    }

    function onBoldClick() {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
    }

    return (
        <Layout title={"create post"}>
            <Header>
                <Link.Button href={'/pages'}>back</Link.Button>
            </Header>
            <Main>
                <Main.Section>
                    <Layout.Container>
                        <Textarea placholder={'Title'} type={"title"} value={title} changeHandle={changeTitle}/>
                        <div>
                            <button onClick={onBoldClick}>Bold</button>
                        </div>
                        <Editor editorState={editorState} onChange={setEditorState} />
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