import "./Calculator.scss";
import { useState } from "react";

const Calculator = () => {
    const [loan, setLoan] = useState(250000);
    const [debitInterest, setDebitInterest] = useState(1.5);
    const [repayment, setRepayment] = useState(3);

    const changeLoan = (event) => {
        setLoan(event.target.value);
    };

    const changeDebitInterest = (event) => {
        setDebitInterest(event.target.value);
    };

    const changeRepayment = (event) => {
        setRepayment(event.target.value);
    };

    const calculateRate = () => {
        alert(`${loan}, ${debitInterest}, ${repayment}`);
    };

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
        </div>
    );
};
export default Calculator;
