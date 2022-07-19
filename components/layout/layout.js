import classes from './layout.module.scss'
import Head from "next/head";
import Link from "next/link";
import Button from "../Button/Button";

export default function Layout({children, title}) {
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
                <Link href={"/create-post"}>
                    <a>
                        <Button>
                            create
                        </Button>
                    </a>
                </Link>
            </header>
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                <a href={"https://github.com/Revilise"} target={"_blank"}>
                    <Button.Round>
                        <img src={"./icons/github.svg"} alt={"github icon"} />
                    </Button.Round>
                </a>
                <p>developed by Revilise (c) <span>{(new Date()).getFullYear()}</span></p>
            </footer>
        </div>
    )
}