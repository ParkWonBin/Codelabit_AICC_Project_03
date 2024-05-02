import KakaoLogin from "react-kakao-login";

// 환경변수 가져오기
const kakaoClientId = process.env.REACT_APP_API_KEY_KAKAO_JS

const KakaoSocialLogin = ()=>{    
    const kakaoOnSuccess = async (data)=>{
        console.log(data)
        const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
        console.log(`idToken = ${idToken}`)
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return(
        <>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFail={kakaoOnFailure}
            />
        </>
    )
}

// const kakaoResponse = await axios.post(
//     'https://kapi.kakao.com/v2/user/me',
//     {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//     },
//   );
// console.log(`idToken = ${kakaoResponse.data.id}`);
// console.log(`name = ${kakaoResponse.data.kakao_account.profile.nickname}`);

export default KakaoSocialLogin;