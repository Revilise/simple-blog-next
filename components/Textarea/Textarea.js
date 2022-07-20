import classes from "./textarea.module.scss";

export default function Textarea({hint, value, onChange}) {
    return (
        <textarea
            placeholder={hint}
            value={value}
            onChange={onChange}
            className={classes.textarea}>
        </textarea>
    )
}