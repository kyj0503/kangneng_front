import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./Home.module.css";

function Home() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [naturalLanguage, setNaturalLanguage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const chatContainerRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    const addChatMessage = (message, type) => {
        setChatMessages((prevMessages) => [...prevMessages, { message, type }]);
        setTimeout(() => {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }, 0);
    };

    const handleAPISend = async () => {
        if (!naturalLanguage.trim()) return;
    
        addChatMessage(naturalLanguage, "user");
        setNaturalLanguage("");
    
        try {
            const res = await fetch("http://43.201.217.228:8080/api/openai/convert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: naturalLanguage }),
            });
    
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
    
            const data = await res.json();
            const content = data?.choices?.[0]?.message?.content || "{}";
    
            // JSON 데이터 파싱
            let parsedContent = {};
            try {
                parsedContent = JSON.parse(content);
            } catch (err) {
                console.error("Failed to parse JSON content:", err);
                addChatMessage("AI 응답을 처리하는 중 문제가 발생했습니다.", "bot");
                return;
            }
    
            // JSON 데이터로부터 필요한 필드 추출 및 기본값 처리
            const title = parsedContent.title || "N/A";
            const description = parsedContent.description || "N/A";
            const location = parsedContent.location || "N/A";
            const dateTime = parsedContent.start?.dateTime || "N/A";
            const date = dateTime !== "N/A" ? dateTime.split("T")[0] : "N/A";
            const time = dateTime !== "N/A" ? dateTime.split("T")[1] : "N/A";
    
            // 정리된 응답 메시지 생성
            const formattedResponse = ` 
    제목: ${title}
    내용: ${description}
    장소: ${location}
    날짜: ${date}
    시간: ${time}
            `;
    
            addChatMessage(formattedResponse.trim(), "bot");
        } catch (error) {
            console.error("Error fetching API:", error);
            addChatMessage("Failed to fetch a response from the AI.", "bot");
        }
    };
    

    return (
        <div className={styles.container}>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarActive={isSidebarActive} />

            <div className={styles.content}>
                <div className={styles.main}>
                    <h1 id="initial-message">어떤 일정을 관리하고 싶으신가요?</h1>

                    {/* Chat Section */}
                    <div className={styles.chatContainer} ref={chatContainerRef}>
                        {chatMessages.map((msg, index) => (
                            <div
                                key={index}
                                className={`${styles.chatMessage} ${msg.type === "user" ? styles.user : styles.bot}`}
                            >
                                <div className={`${styles.messageBubble}`}>
                                    {msg.message}
                                </div>
                                {msg.type === "bot" && (
                                    <div className={styles.iconContainer}>
                                        <img
                                            src="/src/icon/save.png"
                                            alt="Save to Diary"
                                            className={styles.saveIcon}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* API Input Section */}
                    <div className={styles.apiInputContainer}>
                        <textarea
                            className={styles.apiInput}
                            value={naturalLanguage}
                            onChange={(e) => setNaturalLanguage(e.target.value)}
                            placeholder="Type a message..."
                            rows="1"
                            aria-label="API Input"
                        />
                        <button className={styles.sendButton} onClick={handleAPISend}>
                            <img
                                src="/src/icon/send.webp"
                                alt="Send Icon"
                                className={styles.sendIcon}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
