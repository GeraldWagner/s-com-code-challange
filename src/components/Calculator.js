import "./Calculator.scss";
import { useState } from "react";

const Calculator = () => {
    const [loan, setLoan] = useState(250000);
    const [debitInterest, setDebitInterest] = useState(1.5);
    const [repayment, setRepayment] = useState(3);

    const debitNum = debitInterest / 100 + 1;
    const owing = loan * debitNum;

    const month = 10;
    const repayParm = (debitNum ** month - 1) / debitNum - 1;
    const repaying = repayment * repayParm;

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

            <div className="calculation-container">
                <div>{month}</div>
                <div>{debitNum}</div>
                <div>{owing}</div>
                <div>{repaying}</div>
            </div>
        </div>
    );
};
export default Calculator;
