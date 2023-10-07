import React from "react";

const Header = ({ children, className, home }) => {
    return <header className={className}>{children}</header>;
};

export default Header;
