import React from 'react';

const Google = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_KEY;
  const googleRedirectUrl = process.env.REACT_APP_GOOGLE_REDIRECT_URL;

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile&redirect_uri=${googleRedirectUrl}`;

  const loginHandler = () => {
    window.location.href = googleAuthUrl; // Google 로그인 URL로 리디렉션
  };

  return (
    <button onClick={loginHandler} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
      <img src="/path/to/google-logo.png" alt="Google Logo" style={{ width: '20px', marginRight: '10px' }} />
      구글 로그인
    </button>
  );
};

export default Google;
