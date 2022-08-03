import classes from './Search.module.scss'
import Icons from "../SvgIcons/SvgIcons";

export default function Search() {
    return (
        <div className={classes.container}>
            <input placeholder={"search everything"} type={"text"} className={classes.input} />
            <button className={classes.button}>
                <Icons.Search />
            </button>
        </div>
    )
}