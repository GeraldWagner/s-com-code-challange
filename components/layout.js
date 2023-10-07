import Head from "next/head";
import Link from "next/link";
import Header from "./site/Header";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Footer from "./site/Footer";

const name = "Gerald Wagner";
export const siteTitle = `S-Com: Coding Challenge`;

export default function Layout({ children, home }) {
    return (
        <>
            {/*<div className={styles.outerwrapper}> */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Coding Challenge for S-Com" />
                <meta name="og:title" content={siteTitle} />
            </Head>

            <Header className={styles.header} home>
                <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
            </Header>
            <main>{children}</main>
            <Footer className={styles.footer}>
                <p className={utilStyles.headingSm}>Teilnehmer: {name}</p>

                {!home ? (
                    <>
                        <div className={styles.backToHome}>
                            <Link href="/">&larr; Back to home</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.backToHome}>
                            <Link href="/calculator">
                                Go to Calculator &rarr;
                            </Link>
                        </div>
                    </>
                )}
            </Footer>
            {/*</div>*/}
        </>
    );
}
