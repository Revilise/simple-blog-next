import {EditorState, RichUtils} from "draft-js";
import Button from "../Button/Button";
import classes from './editPanel.module.scss';
import AtomicBlockUtils from "draft-js/lib/AtomicBlockUtils";

export function EditPanel({editorState, setEditorState}) {
    function onStyleClick(style) {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    }

    const insertImage = (base64) => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'image',
            'IMMUTABLE',
            { src: base64 },
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
        return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    };

    function uploadFile(base64) {
        const newEditorState = insertImage(base64);
        setEditorState(newEditorState);
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
            <Button.FileUpload setHandler={uploadFile} />
        </div>
    )
}