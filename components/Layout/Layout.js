import classes from './layout.module.scss'
import Head from "next/head";

export default function Layout({children, title}) {
    return (
        <div className={classes.container}>
            <Head>
                <title>{ title }</title>
            </Head>
            { children }
        </div>
    )
}