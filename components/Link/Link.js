import {useRouter} from "next/router";
import Button from "../Button/Button";

function LinkHOC (props) {
    const router = useRouter();
    const Component = props.component;

    function onClick(e) {
        e.preventDefault();
        router.push(props.href);
    }

    return <Component {...props} onClick={onClick} />
}

const StringLink = (props) => {
    const data = {...props};
    delete data.component;

    return <a href={"#"} {...data} />
}

const ButtonLink = (props) => <Button {...props} />

////// export
const Link = (props) => <LinkHOC {...props} component={StringLink} />;
Link.Button = (props) => <LinkHOC {...props} component={props.component ?? ButtonLink} />;

export default Link;