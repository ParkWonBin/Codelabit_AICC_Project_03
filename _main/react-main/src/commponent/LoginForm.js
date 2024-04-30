// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios'
import './LoginForm.css';

// 서버설정 관련
const serverBaseURL = 'http://localhost:4000'

// 함수 정의
const LoginForm = ()=>{
  const [getLoginUserName, setLoginUserName] = useState('')
  return (
    <div className='login-form-container'>
      {getLoginUserName 
      ? (<LoginResult getLoginUserName={getLoginUserName}/>) 
      : (<LoginInputForm setLoginUserName={setLoginUserName} />)
      }
    </div>
  );
}

function LoginResult({getLoginUserName}){
  return <div>{getLoginUserName}님 환영합니다.</div>
}

// 로그인 입력 화면
function LoginInputForm({ setLoginUserName}){
  const [getId, setId] = useState('');
  const [getPassword, setPassword] = useState('');

  // 로그인 버튼 기능
  const handleLogin = async () => {
    console.log('로그인 시도');
    const Login = await tryLogin(getId, getPassword);
    if (Login.isSuccess){
      setLoginUserName(getId)
    }
    alert(JSON.stringify(Login));
  };

  // 회원가입 버튼 기능
  const handleSignUp = async () => {
    console.log('회원가입 시도');
    const CreateUser = await tryCreateUser(getId, getPassword);
    if (CreateUser.isSuccess){
      setLoginUserName(getId)
    }
    alert(JSON.stringify(CreateUser));
  };

  // 로그인 및 회원가입 겸하는 화면
  return <div>
    <div>
      <label htmlFor="id">ID :</label>
      <input type="text" id="id"
        value={getId}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="password">PW :</label>
      <input type="password" id="password"
        value={getPassword}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
</div>
}

// 로그인 요청 처리
async function tryLogin(id,pw){
  try {
    let res = await axios.post(`${serverBaseURL}/userLogin`, {
      headers: {'Content-Type': 'application/json'},
      userId: id,
      userPw: pw,
    });
    return res.data
  } catch (error) {
    return {isSuccess:false, msg:'로그인 시도 실패'} 
  } 
};

// 회원 가입 요청 처리
async function tryCreateUser(id,pw){
  try {
    let res = await axios.post(`${serverBaseURL}/userCreate`, {
      headers: {'Content-Type': 'application/json'},
      userId: id,
      userPw: pw,
      userPwConfirm: pw,
    });
    return {isSuccess:true, ...res.data}
  } catch (error) {
    return {isSuccess:false, msg: '에러발생'}
  } 
};

export default LoginForm;
