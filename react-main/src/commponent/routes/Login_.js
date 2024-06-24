import React, { useState } from 'react';

import './Login_.css'
import LoginAuth from './Login_Auth';
import LoginSignUp from './Login_SignUp';
import LoginMyPage from './Login_MyPage';

// 함수 정의
export const Login = ({getUser, setUser})=>{
  const [getIsSignUp, setIsSignUp] = useState(false)

  return <>
  <div className='login-form-container'>
  {! getUser.isLogined
   ? ! getIsSignUp
     ? <LoginAuth props={{getUser, setUser, setIsSignUp}}/>  
     : <LoginSignUp props={{getUser, setUser, setIsSignUp}}/>
   : <LoginMyPage props={{getUser, setUser, setIsSignUp}}/>
  }
  </div>

{ getUser.isLogined
  ?<pre style={{margin:'25px'}}>
    {'getUser = '+JSON.stringify(getUser,null,4)}
   </pre>
  :<></>
}

</>
}

export default Login;