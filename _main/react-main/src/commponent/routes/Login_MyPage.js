import axios from 'axios'

const serverBaseURL = process.env.REACT_APP_EXPRESS_URL;

function LoginResult({props}){
  const {getUser,setUser,setIsSignUp} = props

  const logout = ()=>{
    setUser({
      isLogined:false,
      userName:'',
      kakaoAccess:{},
      kakaoMyData:{}
    })
  }

  const unlink = async()=>{
    kakaoUnlink(getUser.kakaoAccess.access_token) // 동의 철회 요청
    logout() // 이후 로그아웃 처리
  }
  const handleDeleteUser=async()=>{
    console.log('회원탈퇴 시도');
    const DeleteUser = await tryDeleteUser(getUser.userId);
    if (DeleteUser.isSucceed){
      
      setUser({
          isLogined: false,
          userId: '',
          userName: '',
          kakaoAccess: {},
          kakaoMyData: {}
      })
      setIsSignUp(false)
  }
  setIsSignUp(false)
  alert(JSON.stringify(DeleteUser));

  }

  const tryDeleteUser = async ()=>{
    try {
        let res = await axios.post(`${serverBaseURL}/userDelete`, {
            headers: { 'Content-Type': 'application/json' },
            userId: getUser.userId
        });

        return { isSuccess: true, ...res.data };
    } catch (error) {
        return { isSuccess: false, msg: '에러발생' };
    }
};

  return <>
  {// 프로필 사진 띄우기
  getUser.kakaoMyData.kakao_account
  ? <img src={ getUser.kakaoMyData.kakao_account.profile.thumbnail_image_url } alt='프로필사진' ></img>
  : <></>
  }      
  <h3>{getUser.userName}님 환영합니다.</h3>

  {// 이메일 띄우기
  getUser.kakaoMyData.kakao_account
  ?<div> 이메일 : { getUser.kakaoMyData.kakao_account.email } </div>
  :<></>
  }

  <div className="button-container">
    <button onClick={logout}>로그아웃</button>
    
    {getUser.kakaoAccess?.access_token 
    ?<>
      <button onClick={unlink}>회원탈퇴</button>
      <button onClick={unlink}>연동해제</button> 
     </>
    :<>
      <button onClick={handleDeleteUser}>회원탈퇴</button>
     </>
    }
  </div>
</>
}

// 카카오 동의 해제 요청
const kakaoUnlink = async (accessToken)=>{
  const url = 'https://kapi.kakao.com/v1/user/unlink'
  const header = {headers: {'Authorization': `Bearer ${accessToken}`}
}
  axios.post(url,{},header)
  .then(response => {
      alert("동의 철회 성공", response.data);
  })
  .catch(error => {
      alert("동의 철회 실패", error);
  });
}


export default LoginResult