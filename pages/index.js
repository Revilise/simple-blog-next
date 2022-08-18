import Layout from "../components/Layout/Layout";
import PostsList from "../components/PostsList/PostsList";
import postsController from "../db/controllers/posts.controller";
import Header from "../components/Header/Header";
import Link from "../components/Link/Link";
import Main from "../components/Main/Main";
import {useEffect, useState} from "react";

export default function Home() {
    const [posts, setPosts] = useState([])
    const [page, changePage] = useState(0);
    const [isFetch, changeIsFetch] = useState(false);
    const [lastSnapshot, setSnapshot] = useState({});

    useEffect(() => {
        postsController
            .getAll(lastSnapshot)
            ?.then(res => {
                setSnapshot(res.docs[res.docs.length - 1]);

                const fetchedPosts = res.docs.map((item) => {
                    const data = item.data();
                    const contentObj = JSON.parse(data.content)
                    const content = contentObj.blocks[0].text.substring(0, 255) + "..."
                    return {...data, content}
                });

                setPosts([...posts, ...fetchedPosts]);
                changePage(page + 1);
                })
            .finally(() => changeIsFetch(false))
    },[isFetch])

    useEffect(() => {
        window.addEventListener('scroll', onscroll);
        return () => document.removeEventListener('scroll', onscroll)
    }, [])

    function onscroll(e) {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;

        if (scrollHeight - scrollTop - innerHeight < 100) {
            changeIsFetch(true);
        }
    }

    return (
        <Layout title={"home"}>
            <Header search>
                <Link.Button href={'/create_post'}>create</Link.Button>
            </Header>
            <Main>
                <Main.Section children={<PostsList posts={posts} />} />
            </Main>
        </Layout>
    )
}




