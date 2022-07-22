import classes from './layout.module.scss'
import Head from "next/head";
import Link from "next/link";
import Button from "../Button/Button";
import {useRouter} from "next/router";

function Layout({children, title, hideCreatePostButton, pathToIconsDir}) {
    return (
        <div className={classes.container}>
            <Head>
                <title>{title ?? "simple-blog"}</title>
            </Head>
            <header className={classes.header}>
                <Link href={"/"}>
                    <h1 className={classes.header_title}>
                        <a>SIMPLE BLOG</a>
                    </h1>
                </Link>
                {
                    !hideCreatePostButton ?
                    (
                        <Link href={"/create_post"}>
                            <a>
                                <Button>
                                    create
                                </Button>
                            </a>
                        </Link>
                    ):
                    <></>
                }
            </header>
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                <a href={"https://github.com/Revilise"} target={"_blank"}>
                    <Button.Round>
                        <img src={pathToIconsDir ? pathToIconsDir+"/github.svg" :"./icons/github.svg"} alt={"github icon"} />
                    </Button.Round>
                </a>
                <p>developed by Revilise (c) <span>{(new Date()).getFullYear()}</span></p>
            </footer>
        </div>
    )
}

Layout.Linear = function LinearLayout({orientation, children, style}) {
    return (
        <div
            style={style}
            className={`
             ${classes.layout} 
             ${orientation ? classes[orientation] : ""}`
        }>
            {children}
        </div>
    )
}

export default Layout;