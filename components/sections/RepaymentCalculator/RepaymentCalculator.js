import { useState } from "react";

import { calculateYearlyDepts } from "./services";
import { CalculatorTable, LoanInputForm, ResultsDisplay } from "./components";

import { Grid, Box, Container, Typography } from "@mui/material";

const styles = {
    h2: {
        marginBottom: 2,
        marginTop: 2,
    },
};

const RepaymentCalculator = () => {
    const [loan, setLoan] = useState(250000);
    const [debitInterest, setDebitInterest] = useState(1.5);
    const [repayment, setRepayment] = useState(3);
    const [years, setYears] = useState(10);
    const [showCalculation, setShowCalculation] = useState(false);

    const changeLoan = (event) => {
        let val = event.target.value;
        if (val <= 0) {
            val = 1;
        }
        setLoan(val);
    };

    const changeDebitInterest = (event) => {
        let val = event.target.value;
        if (val <= 0) {
            val = 0.1;
        }
        setDebitInterest(val);
    };

    const changeRepayment = (event) => {
        let val = event.target.value;
        if (val <= 0) {
            val = 0.1;
        }
        setRepayment(val);
    };

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
        <Container>
            <Grid
                container
                justifyContent="space-between"
                className="calculator"
            >
                <Grid item xs={12} sm={5}>
                    <Typography variant="h2" sx={styles.h2}>
                        Angaben
                    </Typography>

                    <LoanInputForm
                        loan={loan}
                        debitInterest={debitInterest}
                        repayment={repayment}
                        changeLoan={changeLoan}
                        changeDebitInterest={changeDebitInterest}
                        changeRepayment={changeRepayment}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="h2" sx={styles.h2}>
                        Ergebnis
                    </Typography>

                    <ResultsDisplay
                        monthlyRate={monthlyRate}
                        years={years}
                        showCalculation={showCalculation}
                        calculateRate={calculateRate}
                    />
                </Grid>
            </Grid>

            <Box className="calculation-container">
                {showCalculation && (
                    <CalculatorTable tilgungsplan={tilgungsplan} />
                )}
            </Box>
        </Container>
    );
};

export default RepaymentCalculator;
