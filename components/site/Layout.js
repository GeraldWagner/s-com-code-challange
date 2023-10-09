import Head from "next/head";
import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";
import Navi from "./Navi";

import { Typography, Stack } from "@mui/material";

const name = "Gerald Wagner";
export const siteTitle = `S-Com: Coding Challenge`;

const styles = {
    layout: { flexDirection: "column", minHeight: "100vh" },
    main: { flexGrow: 1 },
};

export default function Layout({ children, home }) {
    return (
        <Stack sx={styles.layout}>
            <Head>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <meta name="description" content="Coding Challenge for S-Com" />
                <meta name="og:title" content={siteTitle} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Navi>
                {!home ? (
                    <>
                        <Link href="/">
                            <Typography>← Back to home</Typography>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/tilgungs-rechner">
                            <Typography>Go to Calculator →</Typography>
                        </Link>
                    </>
                )}
            </Navi>

            <main style={styles.main}>{children}</main>
            <Footer>
                <Typography>Teilnehmer: {name}</Typography>
            </Footer>
        </Stack>
    );
}
