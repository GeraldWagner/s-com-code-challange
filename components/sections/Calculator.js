import { useState } from "react";
import { calculateYearlyDepts } from "./CalculationInterest";
import CalculatorTable from "./CalculatorTable";

import {
    Button,
    Grid,
    Box,
    TextField,
    InputAdornment,
    Stack,
    Container,
} from "@mui/material";

import "../../styles/calculator.module.css";

const Calculator = () => {
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

    const CalculatorAngaben = () => {
        return (
            <>
                <h2>Angaben</h2>
                <TextField
                    label="Darlehenssumme"
                    sx={{ m: 1, width: "100%" }}
                    type="number"
                    name="loan"
                    value={loan}
                    onChange={changeLoan}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">€</InputAdornment>
                        ),
                    }}
                />
                <Stack>
                    <TextField
                        label="Sollzins"
                        sx={{ m: 1, width: "100%" }}
                        type="number"
                        name="debit-interest"
                        value={debitInterest}
                        onChange={changeDebitInterest}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    %
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Tilgung"
                        sx={{ m: 1, width: "100%" }}
                        type="number"
                        name="repayment"
                        value={repayment}
                        onChange={changeRepayment}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    %
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>
            </>
        );
    };

    const CalculatorErgebnis = () => {
        return (
            <>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: 1,
                        gap: 1,
                    }}
                >
                    <h2>Ergebnis</h2>

                    <Stack
                        sx={{ m: 1 }}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <div>Monatliche Rate:</div>
                        <div>{monthlyRate.toFixed(2)} €</div>
                    </Stack>
                    <Stack
                        sx={{ m: 1 }}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <div>Laufzeit:</div>
                        <div>{years} Jahre</div>
                    </Stack>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={calculateRate}
                        sx={{ m: 1, mt: "auto" }}
                    >
                        {showCalculation ? "Ausblenden" : "Berechnen"}
                    </Button>
                </Stack>
            </>
        );
    };

    return (
        <Container>
            <Box>
                <h1>Tilgungsplan</h1>
            </Box>

            <Grid
                container
                justifyContent="space-between"
                className="calculator"
            >
                <Grid item xs={12} sm={5}>
                    <CalculatorAngaben />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <CalculatorErgebnis />
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

export default Calculator;
