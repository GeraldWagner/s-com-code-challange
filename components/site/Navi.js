import { Box } from "@mui/material";
import theme from "../../muiTheme";

const style = {
    navi: {
        minHeight: "72px",
        backgroundColor: theme.palette.primary.main,
        paddingLeft: 3,
        paddingRight: 5,
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
};
const Navi = ({ children }) => {
    return <Box sx={style.navi}>{children}</Box>;
};

export default Navi;
