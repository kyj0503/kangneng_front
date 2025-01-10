import React, { useState } from "react";
import styles from "./Important.module.css";

function Important() {
    const [importantData] = useState([
        {
            title: "강남토",
            content: "강남토!!! 서초 라이프 비즈니스 센터",
            date: "2025.10.10",
        },
    ]);

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.menuIcon}>
                    <img src="/icon/menu.png" alt="Menu" />
                </div>
                <div className={styles.logo}>
                    <img src="/icon/calendar.png" alt="Logo" />
                    <span>Hard To Record</span>
                </div>
                <div className={styles.userIcon}>
                    <img src="/icon/login.png" alt="User" />
                </div>
            </header>

            {/* Sidebar */}
            <div className={styles.sidebar}>
                <ul>
                    <li>
                        <img src="/icon/registration.png" alt="Registration Icon" />
                        <a href="/index">등록</a>
                    </li>
                    <li>
                        <img src="/icon/diary.png" alt="Diary Icon" />
                        <a href="/diary">다이어리</a>
                    </li>
                    <li>
                        <img src="/icon/calendar.png" alt="Calendar Icon" />
                        <a href="/calendar">캘린더</a>
                    </li>
                    <li className={styles.highlight}>
                        <img src="/icon/important.png" alt="Important Icon" />
                        <a href="/important">중요 일정</a>
                    </li>
                    <li>
                        <img src="/icon/trashbin.png" alt="Trash Icon" />
                        <a href="/trash">휴지통</a>
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.main}>
                    <h1>어떤 일정을 관리하고 싶으신가요?</h1>
                    <div className={styles.importantList}>
                        {importantData.map((item, index) => (
                            <div key={index} className={styles.importantItem}>
                                <div className={styles.itemHeader}>
                                    <h3>{item.title}</h3>
                                    <img
                                        src="/icon/star-filled.png"
                                        alt="Important"
                                        className={styles.starIcon}
                                        onClick={() => alert("별 아이콘이 클릭되었습니다.")}
                                    />
                                </div>
                                <p>{item.content}</p>
                                <small>{item.date}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Important;
