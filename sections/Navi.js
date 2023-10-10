import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const logo = {
    width: Math.round(389.764 / 12),
    height: Math.round(496.063 / 12),
};

const Navi = ({ children }) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const style = {
        navi: {
            backgroundColor: "primary.main",
            color: "white",
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...(isDesktop && {
                p: 4,
            }),
        },
    };

    return (
        <Box sx={style.navi}>
            <Image
                src="/images/sparkasse-logo.svg"
                width={logo.width}
                height={logo.height}
                alt="Logo Sparkasse"
            />
            {children}
        </Box>
    );
};

export default Navi;
