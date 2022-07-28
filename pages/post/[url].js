import postsController from "../../db/controllers/posts.controller";
import Layout from "../../components/Layout/Layout";
import PostDetails from "../../components/PostDetails/PostDetails";
import Button from "../../components/Button/Button";
import {useRouter} from "next/router";
import Link from "../../components/Link/Link";
import {useEffect, useState} from "react";
import Loading from "../../components/Loading/Loading";

export default function Post(props) {
    const router = useRouter();
    const [isFetch, changeIsFetch] = useState(false);
    const [data, setData] = useState(Object.create(null));
    function deletePost() {
        const {id} = props;
        postsController.deleteById(id).then(() => router.push('/pages'));
    }
    useEffect(() => {
        changeIsFetch(true);
        postsController.getOne(router.query.url)
            .then((res) => setData(res))
            .then(() => changeIsFetch(false))
    }, [])

    if (isFetch) {
        return <Loading />
    }
    return (
        <Layout pathToIconsDir={"../icons"}>
            <Layout.Linear style={{paddingBottom: "16px"}}>
                <Link href={'/pages'}>back</Link>
                <Button onClick={deletePost}>Delete</Button>
            </Layout.Linear>
            <PostDetails {...data} />
        </Layout>
    )
}