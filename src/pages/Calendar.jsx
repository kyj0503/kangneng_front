import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./Calendar.module.css";

const Calendar = () => {
    const [highlightedPage, setHighlightedPage] = useState("calendar");

    const handleMenuClick = (page) => {
        setHighlightedPage(page);
    };

    return (
        <div className={styles.container}>
            <Header />
            <Sidebar highlightedPage={highlightedPage} onHighlight={handleMenuClick} />
            <div className={styles.content}>
                <div className={styles.main}>
                    <h1>캘린더 페이지 내용 여기에 추가</h1>
                    {/* Calendar-specific content can be added here */}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
