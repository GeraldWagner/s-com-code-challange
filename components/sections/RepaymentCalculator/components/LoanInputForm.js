import { TextField, InputAdornment } from "@mui/material";
import NumberField from "../../../components/Inputs/NumberField";

const styles = {
    input: {
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
    error,
    setError,
}) => {
    return (
        <>
            <NumberField
                value={loan}
                changeValue={changeLoan}
                label={"Darlehenssumme"}
                sx={styles.input}
                error={error}
                setError={setError}
                adornment="€"
            />

            <NumberField
                value={debitInterest}
                changeValue={changeDebitInterest}
                label={"Sollzins"}
                sx={styles.input}
                error={error}
                setError={setError}
                adornment="%"
            />

            <NumberField
                value={repayment}
                changeValue={changeRepayment}
                label={"Tilgung"}
                sx={styles.input}
                error={error}
                setError={setError}
                adornment="%"
            />
        </>
    );
};

export default LoanInputForm;
