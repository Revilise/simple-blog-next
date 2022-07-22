import classes from "./PostDetails.module.scss";
import Layout from "../Layout/Layout";

export default function PostDetails({title, description, content, date}) {
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <h1 className={classes.title}>{title}</h1>
                <span className={classes.date}>{date}</span>
            </header>
            <div className={classes.description}>
                {description}
            </div>
            <div className={classes.content}>
                {content}
            </div>
        </div>
    )
}