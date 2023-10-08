import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
    typography: {
        fontFamily: ["Open Sans", "Roboto"].join(","),
        h1: {
            fontWeight: 600,
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
        },
        h2: {
            fontWeight: 600,
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
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
