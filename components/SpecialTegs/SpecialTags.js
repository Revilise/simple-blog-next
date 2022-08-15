import classes from "./specialTags.module.scss";
import Link from "../Link/Link";

class SpecialTags {
    static P = ({children}) => (
        <p className={classes.central_paragraph}>{children}</p>
    )
    static SpanLink = ({children, href}) => (
        <Link href={href} className={classes.span}>{children}</Link>
    )
}

export const { P, SpanLink } = SpecialTags;