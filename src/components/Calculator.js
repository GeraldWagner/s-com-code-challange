import { useState } from "react";
import { calculateYearlyDepts } from "./CalculationInterest";
import CalculatorTable from "./CalculatorTable";

import "./Calculator.scss";

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
        setShowCalculation(true);
        console.table(tilgungsplan);
        console.log(monthlyRate);
    };

    const { tilgungsplan, monthlyRate } = calculateYearlyDepts(
        loan,
        debitInterest,
        repayment,
        years
    );

    return (
        <div className="calculator">
            <h1>Tilgungsplan</h1>
            <div className="loan-container">
                <label htmlFor="loan">Darlehenssumme</label>
                <input
                    type="number"
                    name="loan"
                    value={loan}
                    onChange={changeLoan}
                />
                {" €"}
            </div>

            <div className="debit-interest-container">
                <label htmlFor="debit-interest">Sollzins</label>
                <input
                    type="number"
                    name="debit-interest"
                    value={debitInterest}
                    onChange={changeDebitInterest}
                />
                {" %"}
            </div>

            <div className="repayment-container">
                <label htmlFor="repayment">Tilgung</label>
                <input
                    type="number"
                    name="repayment"
                    value={repayment}
                    onChange={changeRepayment}
                />
                {" %"}
            </div>

            <button onClick={calculateRate}>Berechnen</button>

            <div className="calculation-container">
                {showCalculation && (
                    <CalculatorTable tilgungsplan={tilgungsplan} />
                )}
            </div>
        </div>
    );
};
export default Calculator;
