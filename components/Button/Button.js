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
export default Button;