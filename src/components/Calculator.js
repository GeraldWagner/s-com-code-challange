import "./Calculator.scss";
import { useState } from "react";

const Calculator = () => {
    const [loan, setLoan] = useState(250000);

    const changeLoan = (event) => {
        setLoan(event.target.value);
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
            </div>
        </div>
    );
};
export default Calculator;
