import classes from './button.module.scss';
import {createRef, useState} from "react";

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
    const ref = createRef();

    function uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                if (props.setHandler) props.setHandler(e.target.result);
                ref.current.value = null;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <Button.Utils>
            <label htmlFor={"input"}>pic</label>
            <input id={"input"} ref={ref} className={classes.file_input} type={"file"} onChange={uploadImage} />
        </Button.Utils>
    )
}

export default Button;