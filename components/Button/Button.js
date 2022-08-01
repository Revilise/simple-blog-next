import classes from './button.module.scss';

function Button({children, onClick}) {
    return (
        <button className={classes.button} onClick={onClick ?? function() {}}>
            {children}
        </button>
    )
}

export default Button;