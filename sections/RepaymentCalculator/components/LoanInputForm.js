import {
    NumberFieldPercentage,
    NumberFieldEuro,
} from "../../../components/Inputs";

const styles = {
    input: {
        width: "100%",
        marginBottom: 2,
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
            <NumberFieldEuro
                value={loan}
                changeValue={changeLoan}
                label={"Darlehenssumme"}
                sx={styles.input}
                error={error}
                setError={setError}
                max={1000000}
            />

            <NumberFieldPercentage
                value={debitInterest}
                changeValue={changeDebitInterest}
                label={"Sollzins"}
                sx={styles.input}
                error={error}
                setError={setError}
                max={30}
            />

            <NumberFieldPercentage
                value={repayment}
                changeValue={changeRepayment}
                label={"Tilgung"}
                sx={styles.input}
                error={error}
                setError={setError}
                max={99}
            />
        </>
    );
};

export default LoanInputForm;
