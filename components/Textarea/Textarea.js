import classes from './Textarea.module.scss';
import {createRef} from "react";

export default function Textarea({value, changeHandle, type, placeholder}) {
    const ref = createRef();

    function onChange(e) {
        ref.current.style.height = 'auto'
        ref.current.style.height = ref.current.scrollHeight + 'px'
        changeHandle(e.target.value);
    }

    if (type) {
        return <textarea placeholder={placeholder} ref={ref} rows={1} onChange={onChange} value={value} className={`${classes.textarea} ${classes[type]}`} />
    }

    return (
        <textarea placeholder={placeholder} ref={ref} rows={1} onChange={onChange} value={value} className={`${classes.textarea}`} />
    )
}