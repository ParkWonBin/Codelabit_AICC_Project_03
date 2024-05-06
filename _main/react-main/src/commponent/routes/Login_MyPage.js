import axios from 'axios'

function LoginResult({props}){
  const {getUser,setUser} = props

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
    {getUser.kakaoAccess?.access_token ?<button onClick={unlink}>연동해제</button> :<></>}
    <button>회원탈퇴</button>
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