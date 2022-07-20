import Layout from "../components/Layout/Layout";
import PostsList from "../components/PostsList/PostsList";
import postsController from "../db/controllers/posts.controller";

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
            <PostsList posts={posts} />
        </Layout>
    )
}




