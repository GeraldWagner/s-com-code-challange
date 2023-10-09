import React from "react";
import { Box } from "@mui/material";

const styles = {
    footer: {
        backgroundColor: "#f5f5f5",
        minHeight: 100,
        p: 3,
        paddingLeft: 5,
    },
};

const Footer = ({ children, home }) => {
    return <Box sx={styles.footer}>{children}</Box>;
};

export default Footer;
