import React, { useState } from "react";
import Header from "../components/Header"; // Header 컴포넌트 연결
import Sidebar from "../components/Sidebar"; // Sidebar 컴포넌트 연결
import styles from "./Diary.module.css";

function Diary() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [diaryItems, setDiaryItems] = useState(() => {
        const storedDiary = localStorage.getItem("diaryMemo");
        return storedDiary ? JSON.parse(storedDiary) : [];
    });

    const handleSave = () => {
        if (!title.trim() && !content.trim()) {
            alert("제목 또는 내용을 입력하세요.");
            return;
        }

        const newDiary = {
            title: title || "제목 없음",
            content: content || "내용 없음",
            date: new Date().toLocaleDateString(),
        };

        const updatedDiary = [...diaryItems, newDiary];
        setDiaryItems(updatedDiary);
        localStorage.setItem("diaryMemo", JSON.stringify(updatedDiary));

        setTitle("");
        setContent("");
    };

    return (
        <div className={styles.container}>
            <Header /> {/* Header 컴포넌트 사용 */}
            <Sidebar /> {/* Sidebar 컴포넌트 사용 */}

            <div className={styles.content}>
                <div className={styles.main}>
                    <h1>다이어리</h1>
                    <div className={styles.diaryContainer}>
                        {/* Diary Form */}
                        <div className={styles.diaryForm}>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="제목 없음"
                                className={styles.titleInput}
                            />
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="내용"
                                className={styles.contentInput}
                            ></textarea>
                            <div className={styles.iconButton} onClick={handleSave}>
                                <img src="/icon/save.png" alt="Save" />
                            </div>
                        </div>

                        {/* Diary List */}
                        <div className={styles.diaryList}>
                            {diaryItems.map((item, index) => (
                                <div key={index} className={styles.diaryItem}>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <small>{item.date}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diary;
