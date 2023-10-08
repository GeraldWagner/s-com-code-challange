import { Typography, Stack, Button } from "@mui/material";

const ResultsDisplay = ({
    monthlyRate,
    years,
    showCalculation,
    calculateRate,
}) => {
    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: 1,
                    gap: 1,
                }}
            >
                <Typography variant="h2">Ergebnis</Typography>

                <Stack
                    sx={{ m: 1 }}
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography>Monatliche Rate:</Typography>
                    <Typography>{monthlyRate.toFixed(2)} €</Typography>
                </Stack>

                <Stack
                    sx={{ m: 1 }}
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography>Laufzeit:</Typography>
                    <Typography>{years} Jahre</Typography>
                </Stack>

                <Button
                    variant="contained"
                    size="large"
                    onClick={calculateRate}
                    sx={{ m: 1, mt: "auto" }}
                >
                    {showCalculation ? "Ausblenden" : "Berechnen"}
                </Button>
            </Stack>
        </>
    );
};

export default ResultsDisplay;
