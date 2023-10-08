import "../styles/global.css";
import theme from "../muiTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Reset CSS */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
