import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#EE0000",
        },
        status: {
            error: red[900],
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
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
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
