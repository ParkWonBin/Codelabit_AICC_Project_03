// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [getId, setId] = useState('');
  const [getPassword, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직을 여기에 작성합니다.
    console.log('로그인 시도:', getId, getPassword);
    alert(`${getId}\n ${getPassword}`);
  };

  const handleSignUp = () => {
    // 회원가입 로직 또는 페이지로의 이동을 여기에 작성합니다.
    console.log('회원가입 페이지로 이동');
  };

  return (
    <div>
      <div>
        <label htmlFor="id">ID :</label>
        <input
          type="text"
          id="id"
          value={getId}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">PW :</label>
        <input
          type="password"
          id="password"
          value={getPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleSignUp}>회원가입</button>
      </div>
    </div>
  );
}

export default LoginForm;
