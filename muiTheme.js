import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        status: {
            error: red[900],
        },
    },
    typography: {
        fontFamily: ["Open Sans", "Roboto"].join(","),
        h1: {
            fontWeight: 600,
            textAlign: "center",
            fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
            margin: "1rem 0",
        },
        h2: {
            fontWeight: 600,
            fontSize: "clamp(1.125rem, 3vw, 1.25rem)",
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
        },
    },
});

export default theme;
