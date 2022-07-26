import postsController from "../../db/controllers/posts.controller";
import Layout from "../../components/Layout/Layout";
import PostDetails from "../../components/PostDetails/PostDetails";
import Button from "../../components/Button/Button";
import {useRouter} from "next/router";

export default function Post(props) {
    const router = useRouter();

    function deletePost() {
        const {id} = props;
        postsController.deleteById(id).then(() => router.replace('/pages'));
    }
    return (
        <Layout pathToIconsDir={"../icons"}>
            <Layout.Linear style={{paddingBottom: "16px"}}>
                <Button.RedirectToHome />
                <Button onClick={deletePost}>Delete</Button>
            </Layout.Linear>
            <PostDetails {...props} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const urls = await postsController.getURLs()
    const paths = urls.map(url => ({params: {url}}))
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const data = await postsController.getOne(params.url)
    return {
        props: {
            ...data
        }
    }
}