import React from "react";
import styles from "./Header.module.css";

function Header({ toggleSidebar }) {
    return (
        <header className={styles.header}>
            <div className={styles.menuIcon} onClick={toggleSidebar}>
                <img src="/src/icon/menu.png" alt="Open sidebar menu" />
            </div>
            <div className={styles.logo}>
                <img src="/src/icon/calendar.png" alt="Logo Icon" />
                <span>Hard To Record</span>
            </div>
            <div className={styles.userIcon}>
                <img src="/src/icon/login.png" alt="User profile icon" />
            </div>
        </header>
    );
}

export default Header;
