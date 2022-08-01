import classes from './main.module.scss'

function Main({ children }) {
    return (
        <div className={classes.container}>
            { children }
        </div>
    )
}

Main.Aside = ({ Component }) => {
    return (
        <div className={classes.aside}>
            { Component }
        </div>
    )
}
Main.Section = ({ Component }) => {
    return (
        <div className={classes.section}>
            { Component }
        </div>
    )
}

export default Main;