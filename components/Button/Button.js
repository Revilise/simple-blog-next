import classes from './button.module.scss';
import {useRouter} from "next/router";

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


Button.RedirectToHome = function RedirectToHomeButton() {
    const router = useRouter();
    return (
        <Button onClick={() => router.replace('/pages')}>Come back</Button>
    )
}
export default Button;