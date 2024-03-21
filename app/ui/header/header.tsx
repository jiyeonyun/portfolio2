import React from "react";
import styles from "../header/header.module.scss";

interface HeaderNavType {
    name: string;
    path: string;
}

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <nav className={styles.headerNav}>
                {headerContents.map((item, index) => {
                    return (
                        <a key={index} href={item.path}>
                            {item.name}
                        </a>
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;

const headerContents: HeaderNavType[] = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Github", path: "/github" },
    { name: "Contact", path: "/contact" },
];
