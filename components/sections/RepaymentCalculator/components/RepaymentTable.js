import React, { useState, useEffect } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    useTheme,
    useMediaQuery,
} from "@mui/material";

const RepaymentTable = ({ tilgungsplan }) => {
    const headerRow = Object.keys(tilgungsplan[0]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [selectedColumn, setSelectedColumn] = useState([headerRow[0]]);

    useEffect(() => {
        setSelectedColumn(headerRow[0]);
    }, []);

    const ColumnSelect = () => {
        const handleChange = (event) => {
            const {
                target: { value },
            } = event;
            setSelectedColumn(value);
        };

        return (
            <>
                {isMobile && (
                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <InputLabel>Anzeige</InputLabel>
                        <Select
                            value={selectedColumn}
                            onChange={handleChange}
                            input={<OutlinedInput label="Anzeige" />}
                        >
                            {headerRow.map((column) => (
                                <MenuItem key={column} value={column}>
                                    {column}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </>
        );
    };

    const ScomTableCell = ({ name, value }) => {
        const showCell =
            (isMobile && selectedColumn === name) ||
            (isMobile && name === "Restschuld") ||
            !isMobile
                ? true
                : false;

        return <>{showCell && <TableCell>{value}</TableCell>}</>;
    };

    return (
        <>
            <ColumnSelect />
            <TableContainer id="table-tilgung">
                {tilgungsplan && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                {headerRow.map((row) => (
                                    <ScomTableCell
                                        key={`th-${row}`}
                                        name={row}
                                        value={row}
                                    />
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tilgungsplan.map((yearlyTilgung) => (
                                <TableRow key={`tr-${yearlyTilgung.Jahr}`}>
                                    <ScomTableCell
                                        name="Jahr"
                                        value={yearlyTilgung.Jahr}
                                    />
                                    <ScomTableCell
                                        name="Zinssatz"
                                        value={yearlyTilgung.Zinssatz}
                                    />
                                    <ScomTableCell
                                        name="Tilgungssatz"
                                        value={yearlyTilgung.Tilgungssatz}
                                    />
                                    <ScomTableCell
                                        name="Rate"
                                        value={yearlyTilgung.Rate}
                                    />
                                    <ScomTableCell
                                        name="Zinsanteil"
                                        value={yearlyTilgung.Zinsanteil}
                                    />
                                    <ScomTableCell
                                        name="Tilgungsanteil"
                                        value={yearlyTilgung.Tilgungsanteil}
                                    />

                                    <ScomTableCell
                                        name="Restschuld"
                                        value={yearlyTilgung.Restschuld}
                                    />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </TableContainer>
        </>
    );
};

export default RepaymentTable;
