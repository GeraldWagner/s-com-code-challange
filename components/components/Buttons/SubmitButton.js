import { Button } from "@mui/material";

const SubmitButton = ({ children, sx, onClick }) => {
    const styles = {
        button: {
            borderRadius: 10,
            p: 3,
        },
    };
    return (
        <Button
            variant="contained"
            size="large"
            onClick={onClick}
            sx={{ ...sx, ...styles.button }}
        >
            {children}
        </Button>
    );
};

export default SubmitButton;
