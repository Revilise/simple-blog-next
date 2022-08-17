import {RichUtils} from "draft-js";
import Button from "../Button/Button";
import classes from './editPanel.module.scss';

export function EditPanel({editorState, setEditorState}) {
    function onStyleClick(style) {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    }

    return (
        <div className={classes.edit_panel}>
            <Button.Utils onClick={() => onStyleClick('BOLD')}>
                <b>B</b>
            </Button.Utils>
            <Button.Utils onClick={() => onStyleClick('ITALIC')}>
                <i>i</i>
            </Button.Utils>
            <Button.Utils onClick={() => onStyleClick('UNDERLINE')}>
                <u>u</u>
            </Button.Utils>
            <Button.Utils onClick={() => onStyleClick('STRIKETHROUGH')}>
                <strike>s</strike>
            </Button.Utils>
        </div>
    )
}