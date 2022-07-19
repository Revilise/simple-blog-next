import Link from "next/link";
import Layout from "../components/layout/layout";

export default function Home() {
    return (
        <Layout title={"home"}>
            <Link href={"/posts"}>
                <a>posts link</a>
            </Link>
            <Link href={"/create-post"}>
                <a>go to single post</a>
            </Link>
        </Layout>
    )
}