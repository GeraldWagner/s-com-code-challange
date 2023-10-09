import { Box } from "@mui/material";
import theme from "../../muiTheme";
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
const Navi = ({ children }) => {
    const divider = 12;
    const width = Math.round(389.764 / divider);
    const height = Math.round(496.063 / divider);

    console.log(width, height);

    return (
        <Box sx={style.navi}>
            <Image
                src="/images/sparkasse-logo.svg"
                width={width}
                height={height}
                alt="Logo Sparkasse"
            />
            {children}
        </Box>
    );
};

export default Navi;
