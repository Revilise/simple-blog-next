import postsController from "../../db/controllers/posts.controller";
import Layout from "../../components/Layout/Layout";
import PostDetails from "../../components/PostDetails/PostDetails";
import Button from "../../components/Button/Button";

export default function Post(props) {
    return (
        <Layout pathToIconsDir={"../icons"}>
            <Layout.Linear style={{paddingBottom: "16px"}}>
                <Button.RedirectToHome />
            </Layout.Linear>
            <PostDetails {...props} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const ids = await postsController.getIds()
    const paths = ids.map(id => ({params: {id}}))
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const data = await postsController.getOne(params.id)
    return {
        props: {
            ...data
        }
    }
}