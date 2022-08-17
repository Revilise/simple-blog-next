import classes from "./postDetails.module.scss";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import SvgIcons from "../SvgIcons/SvgIcons";
import Draft, {Editor, EditorState} from "draft-js";
import {useCallback} from "react";

export default function PostDetails(props) {
    const {title, date, deletePost, empty} = props;

    if (empty) {
        return <div>not found 404</div>
    }

    const content = props.content ?
        EditorState.createWithContent(Draft.convertFromRaw(props.content)) :
        EditorState.createEmpty();

    const d = new Date(date);

    const blockStyleFn = useCallback(
        () => 'block', [],
    )

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <span className={classes.date}>{d.toDateString()}</span>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.btns_panel}>
                    <Button><SvgIcons.Bookmark /></Button>
                    <Button><SvgIcons.Share /></Button>
                    <div className={classes.plug} />
                    <Button.Bordered onClick={deletePost}>delete</Button.Bordered>
                </div>
            </header>
            <div className={classes.content}>
                <Layout.Container>
                    <Editor editorState={content} blockStyleFn={blockStyleFn} readOnly={true} />
                </Layout.Container>
            </div>
        </div>
    )
}