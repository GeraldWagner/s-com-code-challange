import { Button } from "@mui/material";

const SubmitButton = ({
    children,
    sx,
    onClick,
    variant = "contained",
    disabled,
}) => {
    const styles = {
        button: {
            borderRadius: 10,
            p: 3,
        },
    };
    return (
        <Button
            variant={variant}
            size="large"
            onClick={onClick}
            sx={{ ...sx, ...styles.button }}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default SubmitButton;
