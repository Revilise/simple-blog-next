import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Link from "../components/Link/Link";
import 'draft-js/dist/Draft.css';
import CreatePost from "../features/create-post/CreatePost";

export default function _CreatePost() {
    return (
        <Layout title={"create"}>
            <Header>
                <Link.Button href={'/'} handler={() => alert("post unsaved")}>back</Link.Button>
            </Header>
            <CreatePost />
        </Layout>
    )
}

