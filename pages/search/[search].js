import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import Link from '../../components/Link/Link'
import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";
import PostsList from "../../components/PostsList/PostsList";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Search from "../../components/Search/Search";
import postsController from "../../db/controllers/posts.controller";

export default function _Search() {
    const [posts, setPosts] = useState([]);
    const router = useRouter();
    useEffect(() => {
        postsController.getByString(router.query.search).then(res => setPosts(res));
    }, [router.query.search])

    return (
        <Layout title={"search..."}>
            <Header>
                <Search />
                <Link.Button href={'/create_post'}>create new post</Link.Button>
            </Header>
            <Main>
                <Main.Aside children={<Sidebar />} />
                <Main.Section>
                    <PostsList posts={posts} />
                </Main.Section>
            </Main>
        </Layout>
    )
}