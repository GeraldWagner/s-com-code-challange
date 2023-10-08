import { Box } from "@mui/material";

const styles = {
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        p: 2,
        mb: 2,
        backgroundColor: "red",
    },
};

const Header = ({ children, home }) => {
    return <Box sx={styles.header}>{children}</Box>;
};

export default Header;
