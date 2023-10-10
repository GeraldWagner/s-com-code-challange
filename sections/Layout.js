import Head from "next/head";
import Footer from "./Footer";
import Navi from "./Navi";
import { Typography, Stack } from "@mui/material";

const name = "Gerald Wagner";
export const siteTitle = `S-Com: Coding Challenge`;

const styles = {
    layout: { flexDirection: "column", minHeight: "100vh" },
    main: { flexGrow: 1 },
};

const Layout = ({ children }) => {
    return (
        <Stack sx={styles.layout}>
            <Head>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <meta name="description" content="Coding Challenge for S-Com" />
                <meta name="og:title" content={siteTitle} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </Head>

            <Navi />

            <main style={styles.main}>{children}</main>

            <Footer>
                <Typography variant="caption" display="block">
                    {siteTitle}
                </Typography>
                <Typography variant="caption" display="block">
                    Teilnehmer: {name}
                </Typography>
            </Footer>
        </Stack>
    );
};

export default Layout;
