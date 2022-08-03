import Layout from "../components/Layout/Layout";
import PostsList from "../components/PostsList/PostsList";
import postsController from "../db/controllers/posts.controller";
import Header from "../components/Header/Header";
import Link from "../components/Link/Link";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import Search from "../components/Search/Search";

export async function getStaticProps({params}) {
    const posts = await postsController.getAll()
    return {
        props: {
            posts
        }
    }
}

export default function Home({posts}) {
    return (
        <Layout title={"home"}>
            <Header>
                <Search />
                <Link.Button href={'/create_post'}>create new post</Link.Button>
            </Header>
            <Main>
                <Main.Aside children={<Sidebar />}/>
                <Main.Section children={<PostsList posts={posts} />} />
            </Main>
        </Layout>
    )
}




