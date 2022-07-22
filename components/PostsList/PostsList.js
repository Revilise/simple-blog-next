import classes from "./postsList.module.scss";
import Post from "../Post/Post";
import Link from "next/link";
import {useRouter} from "next/router";

export default function PostsList({posts}) {
    const router = useRouter();
    function redirectToPost(id) {
        router.replace(`/post/${id}`)
    }
    return (
        <div className={classes.container}>
            {posts.map((elem, idx) => (
                <div key={idx} onClick={() => redirectToPost(elem.id)}>
                    <Post {...elem} />
                </div>
            ))}
        </div>
    )
}