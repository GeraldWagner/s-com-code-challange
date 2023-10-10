import { useState } from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import {
    CalculatorTable,
    LoanInputForm,
    ResultsDisplay,
    calculateYearlyDepts,
} from "./";
import { SlideToggleBox } from "../../components/Boxes";
import { DividerLg } from "../../components/Dividers";
import { styles } from "./RepaymentCalculator.styles";

const RepaymentCalculator = () => {
    const [showCalculation, setShowCalculation] = useState(false);
    const [error, setError] = useState(false);
    const [loan, setLoan] = useState(250000);
    const [debitInterest, setDebitInterest] = useState(1.5);
    const [repayment, setRepayment] = useState(3);
    const years = 10;

    const changeLoan = (event) => setLoan(event.target.value);
    const changeDebitInterest = (event) => setDebitInterest(event.target.value);
    const changeRepayment = (event) => setRepayment(event.target.value);

    const calculateRate = () => {
        setShowCalculation((prev) => !prev);
    };

    const { tilgungsplan, monthlyRate } = calculateYearlyDepts(
        loan,
        debitInterest,
        repayment,
        years
    );

    return (
        <Container sx={styles.wrapper}>
            <Grid container justifyContent="space-between" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" sx={styles.h2}>
                        Angaben
                    </Typography>

                    <LoanInputForm
                        loan={loan}
                        changeLoan={changeLoan}
                        repayment={repayment}
                        changeDebitInterest={changeDebitInterest}
                        debitInterest={debitInterest}
                        changeRepayment={changeRepayment}
                        error={error}
                        setError={setError}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h2" sx={styles.h2}>
                        Ergebnis
                    </Typography>

                    <ResultsDisplay
                        monthlyRate={monthlyRate}
                        years={years}
                        error={error}
                        calculateRate={calculateRate}
                        showCalculation={showCalculation}
                    />
                </Grid>
            </Grid>

            <Box className="calculation-container">
                <SlideToggleBox isOpen={showCalculation}>
                    <DividerLg />
                    <Typography variant="h2" sx={styles.h2}>
                        Überblick
                    </Typography>

                    <CalculatorTable tilgungsplan={tilgungsplan} />
                </SlideToggleBox>
            </Box>
        </Container>
    );
};

export default RepaymentCalculator;
