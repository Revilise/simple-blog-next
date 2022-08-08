import postsController from "../../db/controllers/posts.controller";
import Layout from "../../components/Layout/Layout";
import PostDetails from "../../components/PostDetails/PostDetails";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";

export default function Post() {
    const router = useRouter();
    const url = router.query.url;
    const [isFetch, changeIsFetch] = useState(false);
    const [data, setData] = useState(Object.create(null));

    function deletePost() {
        postsController.deleteById(data.id).then(() => router.push('/'));
    }

    useEffect(() => {
        changeIsFetch(true);
        if (url) {
            postsController.getOne(router.query.url)
                .then((res) => setData(res))
                .then(() => changeIsFetch(false))
        }
    }, [url])

    return (
        <Layout title={"Sog"}>
            <Header search>
                <Link.Button href={'/create_post'}>create new post</Link.Button>
            </Header>
            <Main>
                <Main.Aside>
                    <Sidebar/>
                </Main.Aside>
                <Main.Section>
                    { isFetch ? <Loading /> : <PostDetails {...data} deletePost={deletePost}/>}
                </Main.Section>
            </Main>
        </Layout>
    )
}