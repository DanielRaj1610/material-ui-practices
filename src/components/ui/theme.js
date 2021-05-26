import { createMuiTheme } from '@material-ui/core/styles';


const arcBlue = "#0b72b9";
const arcOrange = "#ffba60"


export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            fontSize: "1rem",
            fontWeight: "700",
            textTransform: "none",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1em",
            textTransform: "none",
            color: "white"
        }
    }
})