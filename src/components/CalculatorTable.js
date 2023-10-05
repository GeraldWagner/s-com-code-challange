import React from "react";

const CalculatorTable = ({ tilgungsplan }) => {
    const tilgungsplanHeader = Object.keys(tilgungsplan[0]);

    return (
        <>
            <table>
                {tilgungsplan && (
                    <>
                        <thead>
                            <tr>
                                {tilgungsplanHeader.map((row) => (
                                    <td key={`${row}`}>{row}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tilgungsplan.map((yearlyTilgung) => (
                                <tr key={`table-${yearlyTilgung.Jahr}`}>
                                    <td>{yearlyTilgung.Jahr}</td>
                                    <td>{yearlyTilgung.Zinssatz}</td>
                                    <td>{yearlyTilgung.Tilgungssatz}</td>
                                    <td>{yearlyTilgung.Rate}</td>
                                    <td>{yearlyTilgung.Zinsanteil}</td>
                                    <td>{yearlyTilgung.Tilgungsanteil}</td>
                                    <td>{yearlyTilgung.Restschuld}</td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                )}
            </table>
        </>
    );
};
export default CalculatorTable;
