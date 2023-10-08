import { useState } from "react";

const useCalculator = () => {
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

    const toggleCalculationVisibility = () => {
        setShowCalculation((prev) => !prev);
    };

    return {
        loan,
        setLoan,
        changeLoan,

        debitInterest,
        setDebitInterest,
        changeDebitInterest,

        repayment,
        setRepayment,
        changeRepayment,

        years,
        setYears,

        showCalculation,
        setShowCalculation,
        toggleCalculationVisibility,
    };
};

export default useCalculator;
