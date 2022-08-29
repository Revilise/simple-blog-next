import classes from './feed.module.scss'
import {useRouter} from "next/router";

export default function Feed({title, content, date, url}) {
    const router = useRouter();
    return (
        <div onClick={() => router.push({
            pathname: '/post/[url]',
            query: {url},
        })} className={classes.container}>
            <header className={classes.header}>
                <h3 className={classes.title}>
                    {title}
                </h3>
                <span className={classes.date}>{date}</span>
            </header>
            <p className={classes.description}>
                {content}
            </p>
        </div>
    )
}