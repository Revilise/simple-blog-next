import classes from "./postsList.module.scss";
import Post from "../Post/Post";
import {useRouter} from "next/router";
import React from "react";

export default function PostsList({posts}) {
    const router = useRouter();
    function redirectToPost(url) {
        router.replace(`/post/${url}`)
    }
    return (
        <div className={classes.container}>
            {posts.map((elem, idx) => (
                <div key={idx} onClick={() => redirectToPost(elem.url)}>
                    <Post {...elem} />
                </div>
            ))}
        </div>
    )
}