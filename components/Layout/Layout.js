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

Layout.Container = (props) => {
    return <div {...props} className={`${classes.container} ${props.className}`} />
}

export default Layout;