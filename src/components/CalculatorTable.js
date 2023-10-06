import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const CalculatorTable = ({ tilgungsplan }) => {
    const tilgungsplanHeader = Object.keys(tilgungsplan[0]);

    return (
        <TableContainer>
            {tilgungsplan && (
                <Table>
                    <TableHead>
                        <TableRow>
                            {tilgungsplanHeader.map((row) => (
                                <TableCell key={`th-${row}`}>{row}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tilgungsplan.map((yearlyTilgung) => (
                            <TableRow key={`tr-${yearlyTilgung.Jahr}`}>
                                <TableCell>{yearlyTilgung.Jahr}</TableCell>
                                <TableCell>{yearlyTilgung.Zinssatz}</TableCell>
                                <TableCell>
                                    {yearlyTilgung.Tilgungssatz}
                                </TableCell>
                                <TableCell>{yearlyTilgung.Rate}</TableCell>
                                <TableCell>
                                    {yearlyTilgung.Zinsanteil}
                                </TableCell>
                                <TableCell>
                                    {yearlyTilgung.Tilgungsanteil}
                                </TableCell>
                                <TableCell>
                                    {yearlyTilgung.Restschuld}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};
export default CalculatorTable;
