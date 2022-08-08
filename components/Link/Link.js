import {useRouter} from "next/router";
import Button from "../Button/Button";

function LinkHOC (props) {
    const router = useRouter();
    const Component = props.component;

    function redirect (e) {
        e.preventDefault();
        router.push(props.href);
    }

    return <Component {...props} redirect={redirect} />
}

const StringLink = (props) => {
    const data = {...props};
    data.onClick = props.redirect;

    delete data.redirect;
    delete data.component;

    return <a href={"#"} {...data} />
}

const ButtonLink = (props) => <Button {...props} onClick={props.redirect} />

////// export
const Link = (props) => <LinkHOC {...props} component={StringLink} />;
Link.Button = (props) => <LinkHOC {...props} component={props.component ?? ButtonLink} />;

export default Link;