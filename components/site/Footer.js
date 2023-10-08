import React from "react";
import styles from "../../styles/layout.module.css";

const Footer = ({ children, home }) => {
    return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
