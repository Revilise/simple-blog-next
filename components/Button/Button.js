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

export default Button;