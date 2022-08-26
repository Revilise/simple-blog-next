import React from "react";
import createImagePlugin from '@draft-js-plugins/image';
import Editor from '@draft-js-plugins/editor';
import {useCallback} from "react";

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin]

function _Editor(props, ref) {

    const styleMap = {
        'STRIKETHROUGH': {
            textDecoration: 'line-through',
        },
    };

    // todo: different blocks styling
    const blockStyleFn = useCallback((block, {state}) => {
        console.log(block.getType())
        switch (block.getType()) {
            case "atomic": return "image-block"
            default: return "block";
        }
    }, [])

    return (
        <Editor
            {...props}
            ref={ref}
            plugins={plugins}
            blockStyleFn={blockStyleFn}
            customStyleMap={styleMap}
        />
    )
}


export default React.forwardRef(_Editor);