import React from "react";
import styles from "../../styles/layout.module.css";

const Header = ({ children, home }) => {
    return <header className={styles.header}>{children}</header>;
};

export default Header;
