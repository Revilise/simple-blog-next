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
import {Editor, EditorState, convertToRaw} from "draft-js";
import 'draft-js/dist/Draft.css';
import SideLinks from "../components/SideLinks/SideLinks";
import {createPostSideLinks} from "../resorses/resourses";
import {emptyContentState} from "../resorses/draftResourses";
import {EditPanel} from "../components/EditPanel/EditPanel";

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

    const styleMap = {
        'STRIKETHROUGH': {
            textDecoration: 'line-through',
        },
    };


    return (
        <Layout title={"create"}>
            <Header>
                <Link.Button href={'/pages'}>back</Link.Button>
            </Header>
            <Main>
                <Main.Section>
                    <Layout.Container>
                        <Textarea placeholder={'Title'} type={"title"} value={title} changeHandle={changeTitle}/>
                    </Layout.Container>
                    <Layout.Container>
                        <EditPanel
                            setEditorState={setEditorState}
                            editorState={editorState}
                        />
                        <Editor
                            customStyleMap={styleMap}
                            placeholder={'Begin your article here...'}
                            editorState={editorState}
                            onChange={setEditorState}/>
                    </Layout.Container>
                </Main.Section>
                <Main.Aside>
                    <Layout.Container>
                        <Button onClick={publishPost}>publish</Button>
                        <SideLinks items={createPostSideLinks} />
                    </Layout.Container>
                </Main.Aside>
            </Main>
        </Layout>
    )
}

