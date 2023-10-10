import { Box } from "@mui/material";

const styles = {
    header: {
        minHeight: "clamp(100px, 15vw, 150px)",
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
};

const Header = ({ children }) => {
    return <Box sx={styles.header}>{children}</Box>;
};

export default Header;
