import {Editor} from 'draft-js';
import {EditPanel} from "../EditPanel/EditPanel";

const styleMap = {
    'STRIKETHROUGH': {
        textDecoration: 'line-through',
    },
};

export default function _Editor({editorState, setEditorState}) {

    return (
        <>
            <EditPanel
                setEditorState={setEditorState}
                editorState={editorState}
                userSelect="none" contentEditable={false}
            />
            <Editor
                customStyleMap={styleMap}
                placeholder={'Begin your article here...'}
                editorState={editorState}
                onChange={setEditorState}/>
        </>
    )
}

