import classes from "./post.module.scss";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import SvgIcons from "../../components/SvgIcons/SvgIcons";
import Draft, {EditorState} from "draft-js";
import Editor from "../../components/Editor/Editor";

export default function Post(props) {
    const {title, date, deletePost, empty} = props;

    if (empty) {
        return <div>not found 404</div>
    }

    const content = props.content
        ? EditorState.createWithContent(Draft.convertFromRaw(props.content))
        : EditorState.createEmpty();

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <span className={classes.date}>{date}</span>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.btns_panel}>
                    <Button><SvgIcons.Bookmark /></Button>
                    <Button><SvgIcons.Share /></Button>
                    <div className={classes.plug} />
                    <Button.Bordered onClick={deletePost}>delete</Button.Bordered>
                </div>
            </header>
            <div className={classes.content}>
                <Editor editorState={content} readOnly={true} />
            </div>
        </div>
    )
}