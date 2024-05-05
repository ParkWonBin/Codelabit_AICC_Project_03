import React, { useState } from 'react';
import axios from 'axios';

// 로그인 입력 화면
const LgoinSignUp = ()=>{
    const [getId, setId] = useState('');
    const [getName, setName] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getPasswordConf, setPasswordConf] = useState('');
    
    // 회원가입 처리 관련
    const handleSignUp = async () => {
        console.log('회원가입 시도');
        const CreateUser = await tryCreateUser(getId, getPassword,getPasswordConf, getName);

        if (CreateUser.isSuccess){
          // setLoginUserName(getId) // setLoginUserName 함수가 정의되어 있어야 함
        }
        alert(JSON.stringify(CreateUser));
    };


    // 로그인 요청 처리
    async function tryCreateUser(id, pw, pwConf, name) {
        // 서버설정 관련
        const serverBaseURL = process.env.REACT_APP_EXPRESS_URL;

        try {
            let res = await axios.post(`${serverBaseURL}/userCreate`, {
                headers: { 'Content-Type': 'application/json' },
                userId: id,
                userName: name,
                userPw: pw,
                userPwConfirm: pwConf,
            });

            return { isSuccess: true, ...res.data };
        } catch (error) {
            return { isSuccess: false, msg: '에러발생' };
        }
    };

    // 로그인 및 회원가입 겸하는 화면
    return (
        <>
            <div>
                <label htmlFor="id">ID :</label>
                <input type="text" id="id" value={getId} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" value={getName} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">PW :</label>
                <input type="password" id="password" value={getPassword} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="passwordConform">PW Check:</label>
                <input type="password" id="passwordConform" value={getPasswordConf} onChange={(e) => setPasswordConf(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSignUp}>회원가입</button>
            </div>
        </>
    );
};

export default LgoinSignUp