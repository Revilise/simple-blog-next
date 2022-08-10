import DOMPurify from 'dompurify';

import classes from "./postDetails.module.scss";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import SvgIcons from "../SvgIcons/SvgIcons";
import {convertTransfersToParagraph} from "../../tools/tools";

export default function PostDetails(props) {
    const {title, description, content, date, deletePost, empty} = props;

    if (empty) {
        return <div>not found 404</div>
    }

    function translate() {
        return convertTransfersToParagraph(DOMPurify.sanitize(content));
    }

    const d = new Date(date);
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <span className={classes.date}>{d.toDateString()}</span>
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
                <Layout.Container dangerouslySetInnerHTML={{__html: translate()}} />
            </div>
        </div>
    )
}