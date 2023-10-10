import { Typography, Stack, useMediaQuery, useTheme } from "@mui/material";

const ResultsDisplay = ({ monthlyRate, years }) => {
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
        button: {
            marginTop: 1,
            marginBottom: 2,
        },
    };

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
            </Stack>
        </>
    );
};

export default ResultsDisplay;
