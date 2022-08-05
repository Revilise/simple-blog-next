import classes from './post.module.scss'

export default function Post({title, description, date}) {
    const d = new Date(date);
    return (
        <div className={classes.container}>
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