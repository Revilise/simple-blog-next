import classes from "./postDetails.module.scss";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import SvgIcons from "../SvgIcons/SvgIcons";

export default function PostDetails(props) {
    const {title, description, content, date, deletePost, empty} = props;

    if (empty) {
        return <div>not found 404</div>
    }
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <span className={classes.date}>{date}</span>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.description}>
                    {description}
                </div>
                <div className={classes.btns_panel}>
                    <Button><SvgIcons.Bookmark /></Button>
                    <Button><SvgIcons.Share /></Button>
                    <div className={classes.plug} />
                    <Button.Bordered onClick={deletePost}>delete</Button.Bordered>
                </div>
            </header>
            <div className={classes.content}>
                <Layout.Container>
                        {content}
                </Layout.Container>
            </div>
        </div>
    )
}