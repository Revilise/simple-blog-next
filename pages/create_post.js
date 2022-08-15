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
import Draft, {EditorState, convertToRaw} from "draft-js";
import 'draft-js/dist/Draft.css';
import Editor from "../components/Editor/Editor";

export default function CreatePost() {
    const router = useRouter();

    const [title, changeTitle] = useState("");
    const [isLoading, changeIsLoading] = useState(false);
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(emptyContentState)
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

    return (
        <Layout title={"create post"}>
            <Header>
                <Link.Button href={'/pages'}>back</Link.Button>
            </Header>
            <Main>
                <Main.Section>
                    <Layout.Container>
                        <Textarea placeholder={'Title'} type={"title"} value={title} changeHandle={changeTitle}/>
                    </Layout.Container>
                    <Layout.Container>
                        <Editor setEditorState={setEditorState} editorState={editorState}/>
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

const emptyContentState = Draft.convertFromRaw({
    entityMap: {},
    blocks: [
        {
            text: '',
            key: 'foo',
            type: 'unstyled',
            entityRanges: [],
        },
    ],
});