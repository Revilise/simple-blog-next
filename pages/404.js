import Layout from "../components/Layout/Layout";
import Link from "../components/Link/Link";
import Button from "../components/Button/Button";

export default function Custom404() {
    return (
        <Layout title={"not found"}>
            <div/>
            <div className={"container"}>
                <span>404: PAGE NOT FOUND</span>
                <Link.Button component={Button.Bordered} style={{margin: "0 auto"}} href={'/'}>back to home</Link.Button>
            </div>
            <style jsx>
                {`
                  span {
                  font-family: 'Rubik';
                  text-align: center;
                  font-weight: 700;
                  font-size: 32px;
                  line-height: 24px;
                  letter-spacing: 0.41em;
                  color: #000000;
                  }         
                  .container {
                    position: relative;
                    width: fit-content;
                    margin: auto;
                    height: calc(100vh - 48px);
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    gap: 24px;
                  }
                  div:not([class~="container"]) {
                  content: '';
                  z-index: -1;
                  position: absolute;
                  width: 450px;
                  height: 450px;
                  top: calc((100% - 450px) /2);
                  left: calc((100% - 450px) /2);
                  background: linear-gradient(93.94deg, #7F7FD5 -2.11%, #86A8E7 52.11%, #91EAE4 106.34%);
                  transform: rotate(45deg);
                  }   
               `}
            </style>
        </Layout>
    );
}