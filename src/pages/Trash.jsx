import React, { useState, useEffect } from "react";
import styles from "./Trash.module.css";

function Trash() {
    const [trashData, setTrashData] = useState([
        { title: "강남토", content: "강남토!!! 서초 라이프 비즈니스 센터", date: "2025.10.10" },
        { title: "회의 일정", content: "프로젝트 회의", date: "2025.10.15" },
    ]);
    const [selectAll, setSelectAll] = useState(false);

    // 전체 선택 상태 관리
    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        setTrashData((prev) =>
            prev.map((item) => ({ ...item, selected: checked }))
        );
    };

    // 개별 항목 선택 상태 관리
    const handleSelectItem = (index) => {
        setTrashData((prev) =>
            prev.map((item, idx) =>
                idx === index ? { ...item, selected: !item.selected } : item
            )
        );
    };

    // 복구 버튼 클릭
    const handleRestoreSelected = () => {
        const selectedItems = trashData.filter((item) => item.selected);
        if (selectedItems.length === 0) {
            alert("복구할 항목을 선택하세요.");
            return;
        }

        selectedItems.forEach((item) => {
            alert(`"${item.title}" 복구됨`);
        });

        setTrashData((prev) => prev.filter((item) => !item.selected));
        setSelectAll(false);
    };

    // 삭제 버튼 클릭
    const handleDeleteSelected = () => {
        const selectedItems = trashData.filter((item) => item.selected);
        if (selectedItems.length === 0) {
            alert("삭제할 항목을 선택하세요.");
            return;
        }

        selectedItems.forEach((item) => {
            alert(`"${item.title}" 삭제됨`);
        });

        setTrashData((prev) => prev.filter((item) => !item.selected));
        setSelectAll(false);
    };

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
                    <li>
                        <img src="/icon/important.png" alt="Important Icon" />
                        <a href="/important">중요 일정</a>
                    </li>
                    <li className={styles.highlight}>
                        <img src="/icon/trashbin.png" alt="Trash Icon" />
                        <a href="/trash">휴지통</a>
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.main}>
                    <h1>휴지통</h1>
                    <div className={styles.selectAllContainer}>
                        <input
                            type="checkbox"
                            id="select-all"
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                        <label htmlFor="select-all">전체 선택</label>
                    </div>
                    <div className={styles.trashList}>
                        {trashData.map((item, index) => (
                            <div key={index} className={styles.trashItem}>
                                <div className={styles.checkbox}>
                                    <input
                                        type="checkbox"
                                        checked={item.selected || false}
                                        onChange={() => handleSelectItem(index)}
                                    />
                                </div>
                                <div className={styles.header}>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <small>{item.date}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                    <button onClick={handleRestoreSelected}>복구</button>
                    <button onClick={handleDeleteSelected}>삭제</button>
                </div>
            </div>
        </div>
    );
}

export default Trash;
