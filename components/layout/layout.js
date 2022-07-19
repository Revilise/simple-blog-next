import classes from './layout.module.css'
import Head from "next/head";

export default function Layout({children, title}) {
    return (
        <div className={classes.container}>
            <Head>
                <title>{title ?? "simple-blog"}</title>
            </Head>
            {children}
        </div>
    )
}