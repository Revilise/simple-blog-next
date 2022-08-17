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

import Layout from "../Layout/Layout";
import SpanLink from '../Link/Link'
export default function SideLinks() {
    return (
        <>
            <Layout.Container>
                <div>save in
                    <SpanLink href={''}> drafts</SpanLink>
                </div>
            </Layout.Container>
            <div>
                <SpanLink href={''}>
                    Rules of publication
                </SpanLink>
            </div>
        </>
    )
}