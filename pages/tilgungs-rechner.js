import { Layout, Header } from "../components/site";
import { RepaymentCalculator } from "../components/sections/RepaymentCalculator";
import { Typography, Container } from "@mui/material";
import { DividerLg } from "../components/components/Dividers";

export default function RepaymentCalculatorPage() {
    return (
        <Layout>
            <Header title="Tilgungs Rechner">
                <Typography variant="h1">Tilgungs Rechner</Typography>
            </Header>
            <Container maxWidth="lg">
                <DividerLg />
                <RepaymentCalculator />
            </Container>
        </Layout>
    );
}
