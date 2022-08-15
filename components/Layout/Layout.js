import classes from './layout.module.scss'
import Head from "next/head";

function Layout({children, title}) {
    return (
        <div className={classes.layout}>
            <Head>
                <title>{ title }</title>
            </Head>
            { children }
        </div>
    )
}

Layout.Container = (props) => (
    <div className={classes.container} {...props} />
)

export default Layout;