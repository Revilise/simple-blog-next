import classes from './button.module.scss';

function Button(props) {
    const {children, onClick, className, style} = props;
    return (
        <button style={style} className={`${classes.button} ${className ?? ''}`} onClick={onClick ?? function() {}}>
            {children}
        </button>
    )
}

Button.Bordered = (props) => <Button {...props} className={classes.bordered} />
Button.Utils = (props) => <Button {...props} className={classes.util} />
Button.FileUpload = (props) => {

    function uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                if (props.setHandler) props.setHandler(e.target.result)
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <Button.Utils>
            <label htmlFor={"input"}>pic</label>
            <input id={"input"} className={classes.file_input} type={"file"} onClick={uploadImage} />
        </Button.Utils>
    )
}

export default Button;