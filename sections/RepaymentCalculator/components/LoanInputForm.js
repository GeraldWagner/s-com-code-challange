import {
    NumberFieldPercentage,
    NumberFieldEuro,
} from "../../../components/Inputs";

const styles = {
    input: {
        width: "100%",
        mb: 2,
    },
};

const LoanInputForm = ({
    loanAmount,
    changeLoan,
    interestRate,
    changeDebitInterest,
    yearlyRepayment,
    changeRepayment,
    error,
    setError,
}) => {
    return (
        <>
            <NumberFieldEuro
                value={loanAmount}
                changeValue={changeLoan}
                label={"Darlehenssumme"}
                sx={styles.input}
                error={error}
                setError={setError}
                max={1000000}
            />

            <NumberFieldPercentage
                value={interestRate}
                changeValue={changeDebitInterest}
                label={"Sollzins"}
                sx={styles.input}
                error={error}
                setError={setError}
                max={30}
            />

            <NumberFieldPercentage
                value={yearlyRepayment}
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
