import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import postsController from "../db/controllers/posts.controller";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Button from "../components/Button/Button";
import Loading from "../components/Loading/Loading";
import Textarea from "../components/Textarea/Textarea";
import Link from "../components/Link/Link";
import Draft, {EditorState, convertToRaw} from "draft-js";
import Editor from "../components/Editor/Editor";
import 'draft-js/dist/Draft.css';
import SideLinks from "../components/SideLinks/SideLinks";

export default function CreatePost() {
    const router = useRouter();

    const [title, changeTitle] = useState("");
    const [isLoading, changeIsLoading] = useState(false);
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(emptyContentState)
    );

    const publishPost = (e) => {
        e.preventDefault();

        const content = convertToRaw(editorState.getCurrentContent());
        if (content.blocks[0].text.length && title.length) {
            changeIsLoading(true);

            postsController.post({
                title, content
            }).then(() => {
                router.push('/')
            })
        }
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
                    <Button onClick={publishPost}>publish</Button>
                    <SideLinks />
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