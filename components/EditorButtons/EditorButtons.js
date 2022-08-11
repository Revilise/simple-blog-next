import classes from './editorButtons.module.scss';

export default function EditorButtons() {
    return (
        <div className={classes.editor_buttons}>
            <button className={classes.button}>bold</button>
            <button className={classes.button}>underline</button>
            <button className={classes.button}>list item</button>
            <button className={classes.button}>title</button>
        </div>
    )
}