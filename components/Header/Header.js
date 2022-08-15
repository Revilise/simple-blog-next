import classes from "./header.module.scss";
import Link from "next/link";
import Search from "../Search/Search";

function Header({ children, search }) {
    return (
        <header className={classes.header}>
            <Link href={"/"}>
                <h1 className={classes.header_title}>
                    <a>Sog</a>
                </h1>
            </Link>
            { search ? <Search /> : <div /> }
            { children }
        </header>
    )
}

export default Header;