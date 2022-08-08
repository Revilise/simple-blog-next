import classes from './post.module.scss'
import {useRouter} from "next/router";

export default function Post({title, description, date, url}) {
    const router = useRouter();
    const d = new Date(date);
    return (
        <div onClick={() => router.push({
            pathname: '/post/[url]',
            query: {url},
        })} className={classes.container}>
            <header className={classes.header}>
                <h3 className={classes.title}>
                    {title}
                </h3>
                <span className={classes.date}>{d.toDateString()}</span>
            </header>
            <p className={classes.description}>
                {description}
            </p>
        </div>
    )
}