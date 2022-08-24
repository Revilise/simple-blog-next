import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

import postsController from "../../db/controllers/posts.controller";

import Layout from "../../components/Layout/Layout";
import Post from "../../features/Post";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Link from "../../components/Link/Link";
import {setPost} from "../../features/postSlice";

export default function PostDetails() {
    const router = useRouter();
    const url = router.query.url;
    const [isFetch, changeIsFetch] = useState(false);
    const data = useSelector(state => state.post.data);
    const dispatch = useDispatch();
    const setPostDispatched = (val) => dispatch(setPost(val));

    function deletePost() {
        postsController.deleteById(data.id).then(() => router.push('/'));
    }

    useEffect(() => {
        changeIsFetch(true);
        if (url) {
            postsController.getOne(router.query.url)
                .then((res) => setPostDispatched(res))
                .then(() => changeIsFetch(false))
        }
    }, [url])

    // console.log(data)
    return (
        <Layout title={"Sog"}>
            <Header search>
                <Link.Button href={'/create_post'}>create</Link.Button>
            </Header>
            <Main>
                <Main.Section>
                    { isFetch ? <Loading /> : <Post {...data} deletePost={deletePost}/>}
                </Main.Section>
            </Main>
        </Layout>
    )
}