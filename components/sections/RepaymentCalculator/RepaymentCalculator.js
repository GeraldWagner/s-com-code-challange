import { useState } from "react";

import { CalculatorTable, LoanInputForm, ResultsDisplay } from "./components";
import { Grid, Box, Container, Typography } from "@mui/material";
import { SubmitButton } from "../../components/Buttons";
import { DividerLg } from "../../components/Dividers";

import { calculateYearlyDepts } from "./services";

const styles = {
    h2: {
        marginBottom: 3,
        marginTop: 2,
    },
    button: {
        width: "100%",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        marginTop: 4,
        marginBottom: 4,
    },
};

const RepaymentCalculator = () => {
    const [loan, setLoan] = useState(250000);
    const [debitInterest, setDebitInterest] = useState(1.5);
    const [repayment, setRepayment] = useState(3);
    const [showCalculation, setShowCalculation] = useState(false);

    const [error, setError] = useState(false);

    const changeLoan = (event) => setLoan(event.target.value);
    const changeDebitInterest = (event) => setDebitInterest(event.target.value);
    const changeRepayment = (event) => setRepayment(event.target.value);

    const calculateRate = () => {
        console.log("hello");
        setShowCalculation((prev) => !prev);
    };

    const years = 10;

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
                spacing={4}
            >
                <Grid item xs={12} sm={6}>
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

                <Grid item xs={12} sm={6}>
                    <Typography variant="h2" sx={styles.h2}>
                        Ergebnis
                    </Typography>

                    <ResultsDisplay monthlyRate={monthlyRate} years={years} />

                    <SubmitButton
                        variant="contained"
                        size="large"
                        onClick={calculateRate}
                        sx={styles.button}
                    >
                        {showCalculation ? "Ausblenden" : "Berechnen"}
                    </SubmitButton>
                </Grid>
            </Grid>

            <Box className="calculation-container">
                {showCalculation && (
                    <Grid>
                        <DividerLg />
                        <Typography variant="h2" sx={styles.h2}>
                            Überblick
                        </Typography>
                        <CalculatorTable tilgungsplan={tilgungsplan} />
                    </Grid>
                )}
            </Box>
        </Container>
    );
};

export default RepaymentCalculator;
