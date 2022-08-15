import classes from './editPanel.module.scss';
import {RichUtils} from "draft-js";

function Button({children, active, onStyleClick}) {
    return (
        <button className={`${classes.button} ${active ? classes.active : ''}`} onClick={onStyleClick}>
            {children}
        </button>
    )
}

export function EditPanel({editorState, setEditorState}) {
    function onStyleClick(style) {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    }

    return (
        <div className={classes.edit_panel}>
            <Button onStyleClick={() => onStyleClick('BOLD')}>
                <b>B</b>
            </Button>
            <Button onStyleClick={() => onStyleClick('ITALIC')}>
                <i>i</i>
            </Button>
            <Button onStyleClick={() => onStyleClick('UNDERLINE')}>
                <u>u</u>
            </Button>
        </div>
    )
}