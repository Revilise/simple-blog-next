import classes from "./postsList.module.scss";
import Feed from "../Feed/Feed";
import Link from '../Link/Link';
import React from "react";

export default function PostsList({posts}) {
    return (
        <div className={classes.container}>
            {posts.map((elem, idx) => (
                <Feed key={idx} {...elem} />
            ))}
        </div>
    )
}