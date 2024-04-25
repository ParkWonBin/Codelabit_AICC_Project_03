// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios'
import './LoginForm.css';

function LoginForm() {
  // 리덕스로 getLoginUserName,setLoginUserName 요거 넣어서 관리해보기!!! (이번주 목표!!!)
  const [getLoginUserName,setLoginUserName] = useState('');


  const [getId, setId] = useState('');
  const [getPassword, setPassword] = useState('');

 
const tryLogin = async (id, pw) => {
  const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    // baseURL: 'http://192.168.0.6:3000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const userData = {
    username: id,
    password: pw,
  };

  try {
    const res = await instance.post('/login', userData);
    console.log('결과', res.data);

    if (res.data.success) {
      console.log('로그인 성공');
      return true;
    } else {
      console.log('로그인 실패');
      return false;
    }
  } catch (error) {
    console.log('실패함', error);
    return false;
  }
};

const handleLogin = async () => {
  // 로그인 로직을 여기에 작성합니다.
  console.log('로그인 시도:', getId, getPassword);
  const isSucceed = await tryLogin(getId, getPassword);
  // alert(`${getId}\n ${getPassword}\n${isSucceed}`);

  if(isSucceed){
    //로그인 성공시 처리
    setLoginUserName('getId')

  }else{
    // 로그인 실패시 처리
    alert(`${getId} 로그인에 실패했습니다.`);
    setLoginUserName('')
  }

};

  const handleSignUp = () => {
    // 회원가입 로직 또는 페이지로의 이동을 여기에 작성합니다.
    console.log('회원가입 페이지로 이동');
  };

  return (
    <div>
      {/* getLoginUserName 값이 있는 경우 */}
      {getLoginUserName ? (
        <div>
          <div>{getLoginUserName}님 환영합니다.</div>
        </div>
      ) : (
        // getLoginUserName 값이 없는 경우
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
      )}
    </div>
  );
  
}

export default LoginForm;
