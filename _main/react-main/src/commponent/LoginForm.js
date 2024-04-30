// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios'
import './LoginForm.css';

function LoginForm() {
  // 리덕스로 getLoginUserName,setLoginUserName 요거 넣어서 관리해보기!!! (이번주 목표!!!)
  const [getLoginUserName,setLoginUserName] = useState('');


  const [getId, setId] = useState('');
  const [getPassword, setPassword] = useState('');

 // 제목 : 로그인 처리용 함수 생성
 // 요약 : id, pw받아서 성공여부를 true false로 리턴함.
 // 비고 : 비동기 함수(async)라서 사용 시 await을 써줘야함.
const tryLogin = async (id, pw) => {

  // 특이사항: axios에서 get, post로 넣으면 요청이 들어갔는데. 여기에서는 create를 썼다.
  // 접근방법: creat된 애가 뭐냐? 라고하면, 서버의 baseURL을 갖고, 요청의 구조(서식)을 정의한 것.
  // 접근예시: 정체가 뭐냐???? => 뭐하는 녀석이냐?? => 그 녀석과 관련된 것들이 뭐냐?? => 그 쓰임세를 모아서 하나의 개념으로 묶으면 그녀석이다.
  // 파악된것: 입력값 들어가는거 보니 서버 설정이고, 실제 사용되는거 보니 instance.get, instance.post를 하더라
  // 기억할것: 그렇다면 instance라는 녀석은. 미리 설정값을 세팅해두는 녀석이고. 세팅된 녀석에다가 get, post를 쓰도록 사용하면 되겠구나.
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
    <div className='login-form-container'>
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
