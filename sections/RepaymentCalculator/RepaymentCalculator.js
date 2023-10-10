import { useState } from "react";
import { Grid, Box, Paper, Container, Typography } from "@mui/material";
import { SubmitButton } from "../../components/Buttons";
import { DividerLg } from "../../components/Dividers";
import { CalculatorTable, LoanInputForm, ResultsDisplay } from "./components";
import { calculateYearlyDepts } from "./services";
import SlideToggleBox from "../../components/Boxes/SlideToggleBox";

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
    wrapper: { pt: 4, pb: 6 },
    errorMessage: {
        p: 2,
        backgroundColor: "paper.note.bg",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
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

                    {error ? (
                        <Paper elevation="0" sx={styles.errorMessage}>
                            Bitte korrigieren Sie Ihre Formulareingaben.
                        </Paper>
                    ) : (
                        <>
                            <ResultsDisplay
                                monthlyRate={monthlyRate}
                                years={years}
                            />

                            <SubmitButton
                                variant={
                                    showCalculation ? "outlined" : "contained"
                                }
                                size="large"
                                onClick={calculateRate}
                                sx={styles.button}
                            >
                                {showCalculation ? "Ausblenden" : "Berechnen"}
                            </SubmitButton>
                        </>
                    )}
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
