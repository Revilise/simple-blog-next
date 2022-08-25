import {useState} from "react";
import {useRouter} from "next/router";
import {convertToRaw, EditorState} from "draft-js";
import {emptyContentState} from "../../resorses/draftResourses";

import classes from './create-post.module.scss'
import Layout from "../../components/Layout/Layout";
import Textarea from "../../components/Textarea/Textarea";
import {EditPanel} from "../../components/EditPanel/EditPanel";
import Editor from "../../components/Editor/Editor";
import SideLinks from "../../components/SideLinks/SideLinks";
import Button from "../../components/Button/Button";
import {createPostSideLinks} from "../../resorses/resourses";
import {createNewRecord} from "./createPostAPI";

export default function CreatePost() {
    const router = useRouter();

    const [title, changeTitle] = useState("");
    const [content, setContent] = useState(
        EditorState.createWithContent(emptyContentState)
    );

    function publishPost(e) {
        e.preventDefault();
        const content = convertToRaw(content.getCurrentContent());

        if (content.blocks[0].text.length && title.length) {
            createNewRecord({title, content}).then(() => router.push('/'))
        }
    }

    return (
        <div>
            <form className={`${classes.form} grid-container`}>
                <Layout.Container className={'grid-container__section'}>
                    <Textarea
                        placeholder={'Title'}
                        type={"title"}
                        value={title}
                        required
                        changeHandle={changeTitle}/>
                    <EditPanel
                        setEditorState={setContent}
                        editorState={content}
                    />
                    <Editor
                        placeholder={'Begin your article here...'}
                        editorState={content}
                        onChange={setContent}
                    />
                </Layout.Container>
                <div className={'grid-container__aside'}>
                    <Layout.Container>
                        <Button onClick={publishPost}>publish</Button>
                        <SideLinks items={createPostSideLinks} />
                    </Layout.Container>
                </div>
            </form>
        </div>
    )
}