import { createTheme } from "@mui/material";
import { red, blue } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#EE0000",
        },
        error: {
            main: blue[500],
            light: blue[50],
        },
    },
    typography: {
        fontFamily: ["Open Sans", "Roboto"].join(","),
        h1: {
            fontWeight: 700,
            textAlign: "center",
            fontSize: "clamp(1.125rem, 3vw, 1.25rem)",
            margin: "1rem 0",
        },
        h2: {
            fontWeight: 700,
            fontSize: "clamp(1rem, 3vw, 1rem)",
        },
        body1: {
            fontWeight: 300,
            fontSize: ".825rem",
        },
        button: {
            fontWeight: 600,
            textTransform: "none",
        },
    },
});

export default theme;
