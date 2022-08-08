import classes from "./postsList.module.scss";
import Post from "../Post/Post";
import Link from '../Link/Link';
import React from "react";

export default function PostsList({posts}) {
    return (
        <div className={classes.container}>
            {posts.map((elem, idx) => (
                <Post key={idx} {...elem} />
            ))}
        </div>
    )
}