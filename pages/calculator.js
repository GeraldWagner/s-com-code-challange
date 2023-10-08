import Layout from "../components/layout";
import Section from "../components/site/Section";
import Calculator from "../components/sections/Calculator";

import { Typography } from "@mui/material";

export default function RepaymentCalculator() {
    return (
        <Layout>
            <Section>
                <Typography variant="h1">Tilgungsplan</Typography>
                <Calculator />
            </Section>
        </Layout>
    );
}
