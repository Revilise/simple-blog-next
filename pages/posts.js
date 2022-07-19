import Link from "next/link";

export default function Posts() {
    return (
        <div>
            <h1>posts page</h1>
            <Link href={"/posts/post"}>
                <a>go to single post</a>
            </Link>
        </div>
    )
}