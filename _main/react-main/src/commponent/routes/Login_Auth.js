import React, { useState } from 'react';
import axios from 'axios'

// 카카오톡 OAUTH 관련
import KakaoSocialLogin from '../sdks/KakaoSocialLogin';


// 서버설정 관련
const serverBaseURL = process.env.REACT_APP_EXPRESS_URL

// 로그인 요청 처리
async function tryLogin(id,pw){
  try {
    // console.log('serverBaseURL : '+serverBaseURL)
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

// 로그인 입력 화면
function LoginAuth({props}){
  const {setUser, setIsSignUp} = props
  const [getId, setId] = useState('');
  const [getPassword, setPassword] = useState('');

  // 로그인 버튼 기능
  const handleLogin = async () => {
    // console.log('로그인 시도');
    const Login = await tryLogin(getId, getPassword);
    // console.log(Login.name);
    if (Login.isSucceed){
      const LoginData = {
        isLogined:true,
        userIdx:Login.idx,
        userId:Login.id,
        userName:Login.name,
        kakaoAccess:{},
        kakaoMyData:{}
      }
      // console.log('LoginData:'+JSON.stringify(LoginData))
      setUser(LoginData)
    }else{
      alert('ID 혹은 PW가 잘못되었습니다.')
    }
    // alert(JSON.stringify(Login));
  };

  // 로그인 및 회원가입 겸하는 화면
  return <div>
    <div>
      <label htmlFor="id">ID :</label>
      <input type="text" id="id" value={getId}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="password">PW :</label>
      <input type="password" id="password" value={getPassword}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className='button-container'>
      <button className='login-button' onClick={handleLogin}>로그인</button>
      <button className='signup-button' onClick={()=>{setIsSignUp(true)}}>회원<br/>가입</button>
      <KakaoSocialLogin props={{setUser}}/>
    </div>
</div>
}

export default LoginAuth