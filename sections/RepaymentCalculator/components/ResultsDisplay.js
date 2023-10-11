import {
    Typography,
    Stack,
    useMediaQuery,
    useTheme,
    Paper,
    Box,
} from "@mui/material";

import { formatCurrency } from "../";

const ResultsDisplay = ({
    monthlyPayment,
    loanDurationInYears,
    remainingDebt,
    error,
}) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const styles = {
        outer: {
            display: "flex",
            flexDirection: "column",
            gap: 3,
            ...(isDesktop && {
                p: 7.4,
                borderRadius: 4,
                border: "1px solid #ccc",
            }),
        },
        inner: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        errorMessage: {
            p: 2,
            backgroundColor: "error.light",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
        },
        monthlyPayment: {
            fontWeight: "bold",
            lineHeight: "1",
            display: "flex",
            alignItems: "flex-end",
        },
    };

    if (error) {
        return (
            <Paper elevation={0} sx={styles.errorMessage}>
                Bitte korrigieren Sie Ihre Formulareingaben.
            </Paper>
        );
    }

    return (
        <>
            <Stack sx={styles.outer}>
                <Stack sx={styles.inner}>
                    <Typography sx={styles.monthlyPayment}>
                        Monatliche Rate
                    </Typography>
                    <Typography variant="span" component="h2">
                        {formatCurrency(monthlyPayment)}
                    </Typography>
                </Stack>

                <Stack sx={styles.inner}>
                    <Typography>Restschuld am Ende der Laufzeit</Typography>
                    <Typography>{formatCurrency(remainingDebt)}</Typography>
                </Stack>

                <Stack sx={styles.inner}>
                    <Typography>Laufzeit</Typography>
                    <Typography>{loanDurationInYears} Jahre</Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default ResultsDisplay;
