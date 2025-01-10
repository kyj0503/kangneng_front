import React, { useState } from 'react';

function FetchMessage() {
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null);

    const fetchMessage = async () => {
        try {
            // 토큰 동적으로 가져오기 (예: localStorage)
            const token = localStorage.getItem('accessToken'); // JWT 토큰 가져오기

            if (!token) {
                throw new Error('토큰이 없습니다. 로그인이 필요합니다.');
            }

            const res = await fetch('http://localhost:8080/api/message', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // JWT 토큰 추가
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // CORS 인증 정보 포함
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json(); // JSON 응답 처리
            setResponse(data.message || "응답 메시지가 없습니다.");
            setError(null);
        } catch (error) {
            console.error("Error fetching the message:", error);
            setError(error.message);
            setResponse('');
        }
    };

    return (
        <div>
            <h2>Fetch Message</h2>
            <button onClick={fetchMessage}>Fetch Message</button>
            {response && <p>Response: {response}</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
    );
}

export default FetchMessage;
