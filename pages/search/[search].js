import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import Link from '../../components/Link/Link'
import Main from "../../components/Main/Main";
import PostsList from "../../components/PostsList/PostsList";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import postsController from "../../db/controllers/posts.controller";

export default function _Search() {
    const [posts, setPosts] = useState([]);
    const [lastSnapshot, setLastSnapshot] = useState({});
    const [isFetch, setIsFetch] = useState(false);

    const router = useRouter();
    const search = router.query.search;

    useEffect(() => {
        if (search)
        {
            postsController.getByString(router.query.search, lastSnapshot, setLastSnapshot)
                ?.then(res => setPosts([...posts, ...res]))
                .finally(() => setIsFetch(false));
        }

    }, [isFetch])

    useEffect(() => {
        if (search) setIsFetch(true);

        return function () {
            setLastSnapshot({});
            setPosts([])
        }
    }, [search])

    return (
        <Layout title={"search..."}>
            <Header>
                <Link.Button href={'/create_post'}>create</Link.Button>
            </Header>
            <Main>
                <Main.Section>
                    <PostsList posts={posts} />
                </Main.Section>
            </Main>
        </Layout>
    )
}