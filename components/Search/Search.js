import classes from './Search.module.scss'
import Icons from "../SvgIcons/SvgIcons";
import {useState} from "react";
import {useRouter} from "next/router";

export default function Search() {
    const [input, changeInput] = useState('');
    const router = useRouter();

    function submitHandle(e) {
        if (e) e.preventDefault();
        router.push(`/search/${input}`)
    }
    return (
        <div className={classes.container}>
            <input
                value={input}
                onChange={(e) => changeInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? submitHandle() : null}
                placeholder={"search everything"}
                type={"text"}
                className={classes.input}
            />
            <button onClick={submitHandle} className={classes.button}>
                <Icons.Search />
            </button>
        </div>
    )
}