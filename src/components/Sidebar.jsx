import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({ isSidebarActive }) {
    const location = useLocation(); // 현재 경로를 가져오기 위한 훅

    const menuItems = [
        { path: "/", icon: "/src/icon/registration.png", label: "등록" },
        { path: "/diary", icon: "/src/icon/diary.png", label: "다이어리" },
        { path: "/calendar", icon: "/src/icon/calendar.png", label: "캘린더" },
        { path: "/important", icon: "/src/icon/important.png", label: "중요 일정" },
        { path: "/trash", icon: "/src/icon/trashbin.png", label: "휴지통" },
    ];

    return (
        <div
            className={`${styles.sidebar} ${
                isSidebarActive ? styles.active : styles.hidden
            }`}
        >
            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item.path}
                        className={
                            location.pathname === item.path
                                ? `${styles.menuItem} ${styles.highlight}` // 현재 페이지 강조
                                : styles.menuItem // 일반 메뉴 스타일
                        }
                    >
                        <img src={item.icon} alt={`${item.label} Icon`} />
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
