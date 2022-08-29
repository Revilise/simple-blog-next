import Link from "next/link";
import Search from "../Search/Search";

import classes from "./header.module.scss";

function Header({ children }) {
    return (
        <header className={classes.header}>
            <Link href={"/"}>
                <h1 className={classes.header_title}>
                    <a>Sog</a>
                </h1>
            </Link>
            <Search />
            { children }
        </header>
    )
}

export default Header;