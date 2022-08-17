/*
*
* .central_paragraph {
  text-align: center;
  font-size: 18px;
  font-family: Rubik, Serif, sans-serif;
}
.span, .span * {
  color: var(--lt-span-font-color) !important;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
}
*
* */

import Link from "../Link/Link";
import classes from './sideLinks.module.scss';

function Item({href, title, icon}) {
    return (
        <Link href={href}>
            <div className={classes.item}>
                { icon ? <div className={classes.icon}>{icon}</div> : <></> }
                <span className={classes.title}>{title}</span>
            </div>
        </Link>
    )
}

export default function SideLinks({items}) {
    if (Array.isArray(items)) {
        return (
            <div className={classes.container}>
                {items.map(el => <Item {...el} /> )}
            </div>
        )
    }
    return null;
}