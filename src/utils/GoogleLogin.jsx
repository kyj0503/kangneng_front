import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookie } from '../utils/cookieUtils'; // 쿠키 유틸리티가 필요하다면 구현하세요

const GoogleLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // Google 인증 코드 가져오기

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const handleGoogleLogin = async () => {
      try {
        if (!code) {
          throw new Error('Google 인증 코드가 없습니다.');
        }

        const response = await axios.get(`${BASE_URL}/api/v1/members/googleLogin?code=${code}`);

        // 토큰을 쿠키에 저장
        const token = response.headers.authorization;
        if (token) {
          setCookie('token', token); // 쿠키 저장 유틸리티를 사용
          navigate('/home'); // 인증 성공 후 홈 화면으로 이동
        } else {
          throw new Error('토큰이 응답에 포함되지 않았습니다.');
        }
      } catch (error) {
        console.error('Google 로그인 처리 중 오류:', error);
        alert('Google 로그인 처리 중 오류가 발생했습니다.');
      }
    };

    handleGoogleLogin();
  }, [code, BASE_URL, navigate]);

  return <div>로딩 중입니다. 잠시만 기다려주세요...</div>;
};

export default GoogleLogin;
