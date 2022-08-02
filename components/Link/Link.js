import {useRouter} from "next/router";
import Button from "../Button/Button";

function LinkHOC (props) {
    const router = useRouter();
    const {Component, href} = props;

    function redirect (e) {
        e.preventDefault();
        router.push(href);
    }

    return <Component {...props} redirect={redirect} />
}

const StringLink = ({children, redirect}) => {
    return (
        <a href={"#"} onClick={redirect}>
            {children}
            <style jsx>{`
              a {
                text-decoration: none;
                color: #2D3142;
                transition: color 0.2s;
              }

              a:hover {
                color: var(--lt-span-font-color);
              }
            `}</style>
        </a>
    )
}

const ButtonLink = ({children, redirect}) => {
    return <Button onClick={redirect}>{children}</Button>
}

const Link = (props) => <LinkHOC {...props} Component={StringLink} />;
Link.Button = (props) => <LinkHOC {...props} Component={ButtonLink} /> ;

export default Link;