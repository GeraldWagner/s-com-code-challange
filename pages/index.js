import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1 className={utilStyles.heading2Xl}>
                    Welcome to the Coding Challenge <br />
                    of <br />
                    S-Com
                </h1>
                <Image
                    src="/images/sparkasse-logo.svg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Sparkassen Logo"
                />
            </section>
        </Layout>
    );
}
