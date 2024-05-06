import KakaoLogin from "react-kakao-login";
import axios from 'axios';

const KakaoSocialLogin = ({props}) => {
    const {setUser} = props

    const kakaoClientId = process.env.REACT_APP_KAKAO_JS; // 환경변수 사용

    const kakaoOnSuccess = async (data) => {
        const accessToken = data.response.access_token; // 엑세스 토큰
        alert(`data.response = ${JSON.stringify(data.response)}`);
        
        // 액세스 토큰 넣기
        setUser(userData=>{return {...userData, 
            kakaoAccess: data.response
        }})

        // kakaoUnlink(accessToken); // 동의 철회
        kakaoGetData(accessToken); // 동의 요청
    };

    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    // const kakaoUnlink = async (accessToken)=>{
    //     const url = 'https://kapi.kakao.com/v1/user/unlink'
    //     const header = {headers: {'Authorization': `Bearer ${accessToken}`}
    //   }
    //     axios.post(url,{},header)
    //     .then(response => {
    //         alert("동의 철회 성공", response.data);
    //     })
    //     .catch(error => {
    //         alert("동의 철회 실패", error);
    //     });
    // }

    const kakaoGetData = async (accessToken) => {
        const kakaoURL = 'https://kapi.kakao.com/v2/user/me';
        const headers = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };

        try {
            const kakaoResponse = await axios.get(kakaoURL, headers);
            console.log(`kakaoResponse = ${JSON.stringify(kakaoResponse.data)}`)

            // 마이데이터 넣기
            setUser(data=>{return {
                ...data,
                isLogined: true, 
                userId:'',
                userName: kakaoResponse.data.kakao_account.profile.nickname,
                kakaoMyData: kakaoResponse.data}})
        

        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    return (
        <>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFail={kakaoOnFailure}
                style={{
                    borderRadius: '28px',
                    padding: '14px 28px',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}
            >
                <div>카톡<br/>로그인</div>
            </KakaoLogin>
        </>
    );
};

// 스타일 참고 
// https://wonism.github.io/react-kakao-login/?path=/story/kakaologin--default

// 나중에 로직 참고
// https://velog.io/@pakxe/React-정말-쉽다-카카오-소셜-로그인-프론트에서-이해하고-구현하기


// import { Map, MapMarker} from 'react-kakao-maps-sdk'
// <Map center={{ lat: 33.5563, lng: 126.79581 }}style={{ width: "80%", height: "360px" }}>
// <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
//   <div style={{color:"#000"}}>Hello World!</div>
// </MapMarker>
// </Map>

export default KakaoSocialLogin;