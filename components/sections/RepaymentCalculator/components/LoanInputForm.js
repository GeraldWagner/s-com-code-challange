import { TextField, InputAdornment } from "@mui/material";

const styles = {
    form: {
        width: "100%",
        marginTop: 1,
        marginBottom: 1,
    },
};

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
            <TextField
                label="Darlehenssumme"
                sx={styles.form}
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
                sx={styles.form}
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
                sx={styles.form}
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
