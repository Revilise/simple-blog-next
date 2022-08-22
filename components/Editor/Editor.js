import createImagePlugin from '@draft-js-plugins/image';
import Editor from '@draft-js-plugins/editor';
import {useCallback} from "react";

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin]

export default function(props) {
    const styleMap = {
        'STRIKETHROUGH': {
            textDecoration: 'line-through',
        },
    };

    // todo: different blocks styling
    const blockStyleFn = useCallback(() => 'block', [])

    return (
        <Editor
            {...props}
            plugins={plugins}
            blockStyleFn={blockStyleFn}
            customStyleMap={styleMap}
        />
    )
}