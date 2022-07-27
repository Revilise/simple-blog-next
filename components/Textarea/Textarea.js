import classes from "./textarea.module.scss";

export default function Textarea({hint, value, onChange, required}) {
    return (
        <textarea
            placeholder={hint}
            value={value}
            required={required}
            onChange={onChange}
            className={classes.textarea}>
        </textarea>
    )
}