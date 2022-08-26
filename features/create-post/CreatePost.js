import {useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {convertToRaw, EditorState} from "draft-js";

import classes from './create-post.module.scss'

import Layout from "../../components/Layout/Layout";
import Textarea from "../../components/Textarea/Textarea";
import {EditPanel} from "../../components/EditPanel/EditPanel";
import Editor from "../../components/Editor/Editor";
import SideLinks from "../../components/SideLinks/SideLinks";
import Button from "../../components/Button/Button";
import {createPostSideLinks} from "../../resorses/resourses";
import {createNewRecord} from "./createPostAPI";
import {selectTitle, setTitle, setContent, clearAll, selectContent} from "./createPostSlice";
import {emptyContentState} from "../../resorses/draftResourses";

export default function CreatePost() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const [content, setContentDispatched] = useState(EditorState.createWithContent(emptyContentState))

    function publishPost(e) {
        e.preventDefault();
        const _content = convertToRaw(content.getCurrentContent());

        if (_content.blocks[0].text.length && title.length) {
            createNewRecord({title, content: _content})
                .then(() => {
                    router.push('/');
                })
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
                        changeHandle={setTitle}
                    />
                    <EditPanel
                        setEditorState={setContentDispatched}
                        editorState={content}
                    />
                    <Editor
                        placeholder={'Begin your article here...'}
                        editorState={content}
                        onChange={setContentDispatched}
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