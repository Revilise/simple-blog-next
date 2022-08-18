import classes from './main.module.scss'

function MainHOC({ children, type }) {
    return (
        <div onScroll={() => console.log(window.pageXOffset)} className={classes[type]}>
            { children }
        </div>
    )
}

const Main = ({children}) => MainHOC({children, type: "container"});
Main.Aside = ({children}) => MainHOC({children, type: "aside"});
Main.Section = ({children}) => MainHOC({children, type: "section"});

export default Main;