import React, { useState } from 'react';

import './Login_.css'
import LoginAuth from './Login_Auth';
import LoginSignUp from './Login_SignUp';
import LoginMyPage from './Login_MyPage';

// 함수 정의
export const Login = ({props})=>{
  const {getUser, setUser} = props
  const [getIsSignUp, setIsSignUp] = useState(false)

  return <>
  <div className='login-form-container'>
  {! getUser.isLogined
   ? ! getIsSignUp
     ? <LoginAuth props={{setUser, setIsSignUp}}/>  
     : <LoginSignUp setUser={setUser}/>
   : <LoginMyPage props={{getUser,setUser}}/>
  }
  </div>

{ getUser.kakaoAccess?.access_token
  ?<pre style={{margin:'25px'}}>
    {'kakaoAccess = '+JSON.stringify(getUser.kakaoAccess,null,4)+"\n\n"}
    {'kakaoMyData = '+JSON.stringify(getUser.kakaoMyData,null,4)}
   </pre>
  :<></>
}

</>
}

export default Login;