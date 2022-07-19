import Layout from "../components/layout/layout";
import PostsList from "../components/PostsList/PostsList";
import {getAllPostIds, getAllPosts} from "../db/controllers/posts.controller";
import {useEffect, useState} from "react";

export async function getStaticProps({params}) {

    const posts = await getAllPosts()
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




