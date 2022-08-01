import classes from "./header.module.scss";
import Link from "next/link";

function Header({ children, }) {
    return (
        <header className={classes.header}>
            <Link href={"/"}>
                <h1 className={classes.header_title}>
                    <a>Sog</a>
                </h1>
            </Link>
            { children }
        </header>
    )
}

export default Header;