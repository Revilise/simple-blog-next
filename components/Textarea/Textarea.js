import classes from './Textarea.module.scss';
import {createRef} from "react";

export default function Textarea({value, changeHandle, type, placeholder}) {
    const ref = createRef();

    function resize() {
        ref.current.style.height = "auto";
        ref.current.style.height = ref.current.scrollHeight + "px";
    }

    function onChange(e) {
        e.preventDefault();

        changeHandle(e.target.value);
        resize();
    }

    return (
        <div className={classes.container}>
            <textarea
                onSelect={(e) => {}}
                placeholder={placeholder}
                ref={ref} rows={1}
                onChange={onChange}
                value={value}
                className={`${classes.textarea} ${classes[type] ?? ""}`} />
        </div>
    )
}