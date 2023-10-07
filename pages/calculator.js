import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Calculator from "../components/sections/Calculator";
import utilStyles from "../styles/utils.module.css";

export default function RepaymentCalculator() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <Calculator />
            </section>
        </Layout>
    );
}
