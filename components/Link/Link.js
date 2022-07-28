import {useRouter} from "next/router";

export default function Link({ href, children }) {
    const router = useRouter();
    function redirect(e) {
        e.preventDefault();
        router.push(href);
    }
    return (
        <a href={"#"} onClick={redirect}>{children}</a>
    )
}