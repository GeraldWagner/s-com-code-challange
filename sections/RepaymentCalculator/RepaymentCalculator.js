import { useState } from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import {
    CalculatorTable,
    LoanInputForm,
    ResultsDisplay,
    calculateRepaymentPlan,
} from "./";
import { SlideToggleBox } from "../../components/Boxes";
import { DividerLg } from "../../components/Dividers";
import { SubmitButton } from "../../components/Buttons";

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
};

const RepaymentCalculator = () => {
    const [showCalculation, setShowCalculation] = useState(false);
    const [error, setError] = useState(false);
    const [loanAmount, setLoanAmount] = useState(250000);
    const [interestRate, setInterestRate] = useState(1.5);
    const [yearlyRepayment, setYearlyRepayment] = useState(3);
    const loanDurationInYears = 10;

    const changeLoan = (event) => setLoanAmount(event.target.value);
    const changeDebitInterest = (event) => setInterestRate(event.target.value);
    const changeRepayment = (event) => setYearlyRepayment(event.target.value);

    const calculateRate = () => {
        setShowCalculation((prev) => !prev);
    };

    const {
        repaymentPlan,
        monthlyPayment,
        remainingDebt,
        remainingLoanDuration,
    } = calculateRepaymentPlan(
        loanAmount,
        interestRate,
        yearlyRepayment,
        loanDurationInYears
    );

    return (
        <Container sx={styles.wrapper}>
            <Grid container justifyContent="space-between" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" sx={styles.h2}>
                        Angaben
                    </Typography>

                    <LoanInputForm
                        loanAmount={loanAmount}
                        changeLoan={changeLoan}
                        yearlyRepayment={yearlyRepayment}
                        changeDebitInterest={changeDebitInterest}
                        interestRate={interestRate}
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
                        monthlyPayment={monthlyPayment}
                        loanDurationInYears={remainingLoanDuration}
                        remainingDebt={remainingDebt}
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

                    <CalculatorTable repaymentPlan={repaymentPlan} />
                </SlideToggleBox>
            </Box>
            <SubmitButton
                variant={showCalculation ? "outlined" : "contained"}
                size="large"
                onClick={calculateRate}
                sx={styles.button}
                disabled={error ? true : false}
            >
                {showCalculation ? "Ausblenden" : "Berechnen"}
            </SubmitButton>
        </Container>
    );
};

export default RepaymentCalculator;
