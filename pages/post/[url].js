import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

import postsController from "../../db/controllers/posts.controller";

import Layout from "../../components/Layout/Layout";
import Post from "../../features/post/Post";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Link from "../../components/Link/Link";
import {selectPost, setPost} from "../../features/post/postSlice";
import {getPostByUrl} from "../../features/post/PostAPI";

export default function PostDetails() {
    const router = useRouter();
    const dispatch = useDispatch();
    const url = router.query.url;
    const [isFetch, changeIsFetch] = useState(true);
    const data = useSelector(selectPost);
    const setPostDispatched = (val) => dispatch(setPost(val));

    function deletePost() {
        postsController.deleteById(data.id).then(() => router.push('/'));
    }

    useEffect(() => {
        if (url && url === data.url) {
            changeIsFetch(false);
            return;
        }

        if (url && url !== data.url) {
            getPostByUrl(url)
                .then((res) => setPostDispatched(res))
                .then(() => changeIsFetch(false))
        }

    }, [url])

    return (
        <Layout title={"Sog"}>
            <Header search>
                <Link.Button href={'/create_post'}>create</Link.Button>
            </Header>
            <Main>
                <Link style={{padding: "0 0 24px 0",}} href={"/"}>{"<-- back"}</Link>
                <Main.Section>
                    { isFetch ? <Loading /> : <Post {...data} deletePost={deletePost}/>}
                </Main.Section>
            </Main>
        </Layout>
    )
}