import { Layout, Section } from "../components/site";
import { RepaymentCalculator } from "../components/sections/RepaymentCalculator";

import { Divider, Typography } from "@mui/material";

export default function RepaymentCalculatorPage() {
    return (
        <Layout>
            <Section>
                <Typography variant="h1">Tilgungs Rechner</Typography>
                <Divider />
                <RepaymentCalculator />
            </Section>
        </Layout>
    );
}
