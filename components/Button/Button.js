import classes from './button.module.scss';

function Button({children, onClick}) {
    return (
        <button className={classes.button} onClick={onClick ?? function() {}}>
            {children}
        </button>
    )
}

Button.Round = function RoundButton({children, onClick}) {
    return (
        <div className={classes.round_wrapper}>
            <Button onClick={onClick}>
                {children}
            </Button>
        </div>
    )
}

Button.Submit = function SubmitButton({children, onSubmit}) {
    return (
        <button type={"submit"} onClick={onSubmit} className={`${classes.button} ${classes.submit}`}>
            {children}
        </button>
    )
}
export default Button;