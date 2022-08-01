import {useRouter} from "next/router";
import Button from "../Button/Button";

function Link({ href, children }) {
    const router = useRouter();
    function redirect(e) {
        e.preventDefault();
        router.push(href);
    }
    return (
        <a href={"#"} onClick={redirect}>
            {children}
            <style jsx>{`
            a {
             text-decoration: none;
             color: #2D3142;
            }
          `}</style>
        </a>
    )
}

Link.Button = ({ children, href }) => {
    const router = useRouter();
    function redirect(e) {
        e.preventDefault();
        router.push(href);
    }
    return <Button onClick={redirect}>{children}</Button>
}

export default Link;