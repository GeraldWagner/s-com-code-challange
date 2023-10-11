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

import { formatCurrency } from "../services/formatter";

const RepaymentTable = ({ repaymentPlan }) => {
    const headerRow = Object.keys(repaymentPlan[0]);
    const [selectedColumn, setSelectedColumn] = useState([headerRow[0]]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isDesktop = !isMobile;

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
            tr: {
                ...(isDesktop && {
                    pt: 3,
                    pb: 3,
                }),
            },
        },
    };

    useEffect(() => {
        setSelectedColumn(headerRow[0]);
    }, []);

    const ColumnSelect = () => {
        const changeColumnSelect = (event) => {
            setSelectedColumn(event.target.value);
        };

        const getHeaderRowName = (name) => {
            switch (name) {
                case "Year":
                    return "Jahr";
                case "RateForYear":
                    return "Rate";
                case "Interest":
                    return "Zinsanteil";
                case "Repayment":
                    return "Tilgungsanteil";
                case "RemainingDebt":
                    return "Restschuld";
                default:
                    return name;
            }
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
                                    {getHeaderRowName(column)}
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
                {repaymentPlan && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <RepaymentTableCell
                                    name="Year"
                                    value={"Jahr"}
                                    sx={styles.table.th}
                                />
                                <RepaymentTableCell
                                    name="RateForYear"
                                    value="Rate"
                                    sx={styles.table.th}
                                    align={isDesktop ? "right" : "left"}
                                />
                                <RepaymentTableCell
                                    name="Interest"
                                    value="Zinsanteil"
                                    sx={styles.table.th}
                                    align={isDesktop ? "right" : "left"}
                                />
                                <RepaymentTableCell
                                    name="Repayment"
                                    value="Tilgungsanteil"
                                    sx={styles.table.th}
                                    align={isDesktop ? "right" : "left"}
                                />
                                <RepaymentTableCell
                                    name="RemainingDebt"
                                    value="Restschuld"
                                    align="right"
                                    sx={styles.table.th}
                                />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {repaymentPlan.map((yearlyRepayment) => (
                                <TableRow key={`tr-${yearlyRepayment.Year}`}>
                                    <RepaymentTableCell
                                        name="Year"
                                        value={yearlyRepayment.Year}
                                        sx={styles.table.tr}
                                    />
                                    <RepaymentTableCell
                                        name="RateForYear"
                                        value={formatCurrency(
                                            yearlyRepayment.RateForYear
                                        )}
                                        align={isDesktop ? "right" : "left"}
                                        sx={styles.table.tr}
                                    />
                                    <RepaymentTableCell
                                        name="Interest"
                                        value={formatCurrency(
                                            yearlyRepayment.Interest
                                        )}
                                        align={isDesktop ? "right" : "left"}
                                        sx={styles.table.tr}
                                    />
                                    <RepaymentTableCell
                                        name="Repayment"
                                        value={formatCurrency(
                                            yearlyRepayment.Repayment
                                        )}
                                        align={isDesktop ? "right" : "left"}
                                    />

                                    <RepaymentTableCell
                                        name="RemainingDebt"
                                        value={formatCurrency(
                                            yearlyRepayment.RemainingDebt
                                        )}
                                        align="right"
                                        sx={styles.table.tr}
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
