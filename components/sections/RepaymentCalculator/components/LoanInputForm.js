import { Typography, TextField, InputAdornment } from "@mui/material";

const LoanInputForm = ({
    loan,
    changeLoan,
    debitInterest,
    changeDebitInterest,
    repayment,
    changeRepayment,
}) => {
    return (
        <>
            <Typography variant="h2">Angaben</Typography>

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

            <TextField
                label="Sollzins"
                sx={{ m: 1, width: "100%" }}
                type="number"
                name="debit-interest"
                value={debitInterest}
                onChange={changeDebitInterest}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
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
                        <InputAdornment position="start">%</InputAdornment>
                    ),
                }}
            />
        </>
    );
};

export default LoanInputForm;
