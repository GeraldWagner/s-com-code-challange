import { Box } from "@mui/material";
import theme from "../styles/theme";
import Image from "next/image";

const style = {
    navi: {
        minHeight: "100px",
        backgroundColor: theme.palette.primary.main,
        paddingLeft: 5,
        paddingTop: 4,
        paddingBottom: 5,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

const logo = {
    width: Math.round(389.764 / 12),
    height: Math.round(496.063 / 12),
};

const Navi = ({ children }) => {
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
