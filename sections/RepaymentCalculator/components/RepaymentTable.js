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

const styles = {
    formControl: {
        width: "100%",
        marginTop: 2,
        marginBottom: 2,
    },
    table: {
        th: {
            fontWeight: "bold",
        },
    },
};

const RepaymentTable = ({ tilgungsplan }) => {
    const headerRow = Object.keys(tilgungsplan[0]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [selectedColumn, setSelectedColumn] = useState([headerRow[0]]);

    useEffect(() => {
        setSelectedColumn(headerRow[0]);
    }, []);

    const ColumnSelect = () => {
        const changeColumnSelect = (event) => {
            setSelectedColumn(event.target.value);
        };

        return (
            <>
                {isMobile && (
                    <FormControl sx={styles.formControl}>
                        <InputLabel>Anzeige</InputLabel>
                        <Select
                            value={selectedColumn}
                            onChange={changeColumnSelect}
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

    const RepaymentTableCell = ({ name, value, align, sx }) => {
        const showCell =
            (isMobile && selectedColumn === name) ||
            (isMobile && name === "Restschuld") ||
            !isMobile
                ? true
                : false;

        return (
            <>
                {showCell && (
                    <TableCell sx={sx} align={align}>
                        {value}
                    </TableCell>
                )}
            </>
        );
    };

    return (
        <>
            <ColumnSelect />
            <TableContainer id="table-tilgung">
                {tilgungsplan && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <RepaymentTableCell
                                    name="Jahr"
                                    value={"Jahr"}
                                    sx={styles.table.th}
                                />
                                <RepaymentTableCell
                                    name="Rate"
                                    value="Rate"
                                    sx={styles.table.th}
                                />
                                <RepaymentTableCell
                                    name="Zinsanteil"
                                    value="Zinsanteil"
                                    sx={styles.table.th}
                                />
                                <RepaymentTableCell
                                    name="Tilgungsanteil"
                                    value="Tilgungsanteil"
                                    sx={styles.table.th}
                                />
                                <RepaymentTableCell
                                    name="Restschuld"
                                    value="Restschuld"
                                    align="right"
                                    sx={styles.table.th}
                                />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tilgungsplan.map((yearlyTilgung) => (
                                <TableRow key={`tr-${yearlyTilgung.Jahr}`}>
                                    <RepaymentTableCell
                                        name="Jahr"
                                        value={yearlyTilgung.Jahr}
                                    />
                                    <RepaymentTableCell
                                        name="Rate"
                                        value={yearlyTilgung.Rate}
                                    />
                                    <RepaymentTableCell
                                        name="Zinsanteil"
                                        value={yearlyTilgung.Zinsanteil}
                                    />
                                    <RepaymentTableCell
                                        name="Tilgungsanteil"
                                        value={yearlyTilgung.Tilgungsanteil}
                                    />

                                    <RepaymentTableCell
                                        name="Restschuld"
                                        value={yearlyTilgung.Restschuld}
                                        align="right"
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
