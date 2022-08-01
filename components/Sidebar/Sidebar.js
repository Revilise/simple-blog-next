import classes from './sidebar.module.scss'
import Link from "../Link/Link";
import {Github, Telegram, Vk, WideWorldNet} from "../SvgIcons/SvgIcons";

export default function Sidebar() {
    return (
        <aside className={classes.container}>
            <nav className={classes.primary_navigation}>
                <Link href={'/about_project'}>about project</Link>
                <Link href={'/support'}>support</Link>
            </nav>
            <div className={classes.links}>
                <Link.Button href={'https://github.com/Revilise'}>
                    <Github/>
                    project's git
                </Link.Button>
                <SocialLink url={"vk.com/Revilise"} socialName={"vk"} Img={Vk} />
                <SocialLink url={"tl.com/Revilise"} socialName={"Telegram"} Img={Telegram} />
                <SocialLink url={"portfolio.com/Revilise"} socialName={"Site"} Img={WideWorldNet} />
            </div>
        </aside>
    )
}

function SocialLink({ Img, socialName, url }) {
    return (
        <Link href={url}>
            <div className={classes.social_link}>
                <div className={classes.image}>
                    <Img/>
                </div>
                <div>
                    <h3 className={classes.title}>{socialName}</h3>
                    <span className={classes.link}>{url}</span>
                </div>
            </div>
        </Link>
    )
}