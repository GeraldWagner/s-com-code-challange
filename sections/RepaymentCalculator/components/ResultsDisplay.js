import {
    Typography,
    Stack,
    useMediaQuery,
    useTheme,
    Paper,
} from "@mui/material";

import { SubmitButton } from "../../../components/Buttons";
import { formatCurrency } from "../";

const ResultsDisplay = ({
    monthlyPayment,
    loanDurationInYears,
    error,
    calculateRate,
    showCalculation,
}) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const styles = {
        outer: {
            display: "flex",
            flexDirection: "column",
            gap: 1,
            ...(isDesktop && {
                p: 6,
                borderRadius: 4,
                border: "1px solid #ccc",
            }),
        },
        inner: {
            marginBottom: 2,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        errorMessage: {
            p: 2,
            backgroundColor: "paper.note.bg",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
        },
        button: {
            width: "100%",
            maxWidth: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            marginTop: 4,
            marginBottom: 4,
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
                    <Typography>Monatliche Rate:</Typography>
                    <Typography>{formatCurrency(monthlyPayment)}</Typography>
                </Stack>

                <Stack sx={styles.inner}>
                    <Typography>Laufzeit:</Typography>
                    <Typography>{loanDurationInYears} Jahre</Typography>
                </Stack>
            </Stack>
            <SubmitButton
                variant={showCalculation ? "outlined" : "contained"}
                size="large"
                onClick={calculateRate}
                sx={styles.button}
            >
                {showCalculation ? "Ausblenden" : "Berechnen"}
            </SubmitButton>
        </>
    );
};

export default ResultsDisplay;
