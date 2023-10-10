import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";

const SlideToggleBox = ({ children, isOpen = false }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
        }
    }, []);

    return (
        <Box
            ref={contentRef}
            sx={{
                overflow: "hidden",
                transition: "height 0.5s ease-in-out",
                height: isOpen ? contentHeight : "0px",
            }}
        >
            {children}
        </Box>
    );
};

export default SlideToggleBox;
