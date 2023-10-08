import { Typography, Stack, Button } from "@mui/material";

const styles = {
    outer: {
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        p: 4,
        border: "1px solid #ccc",
        gap: 1,
    },
    inner: {
        marginBottom: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        marginTop: 1,
        marginBottom: 2,
    },
};
const ResultsDisplay = ({
    monthlyRate,
    years,
    showCalculation,
    calculateRate,
}) => {
    return (
        <>
            <Stack sx={styles.outer}>
                <Stack sx={styles.inner}>
                    <Typography>Monatliche Rate:</Typography>
                    <Typography>{monthlyRate.toFixed(2)} €</Typography>
                </Stack>

                <Stack sx={styles.inner}>
                    <Typography>Laufzeit:</Typography>
                    <Typography>{years} Jahre</Typography>
                </Stack>

                <Button
                    variant="contained"
                    size="large"
                    onClick={calculateRate}
                    sx={styles.button}
                >
                    {showCalculation ? "Ausblenden" : "Berechnen"}
                </Button>
            </Stack>
        </>
    );
};

export default ResultsDisplay;
