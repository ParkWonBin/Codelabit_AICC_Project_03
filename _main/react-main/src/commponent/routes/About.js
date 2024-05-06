import './About.css'
import imgsrc1 from '../../20240412_architecture.png'

function About(){
  const text =`# 구현 내용

  1. 로그인 :
      => 회원관리, 개인화 서비스
     - [Express] [API-Kakao-OAuth] 소셜 로그인
     - [Express] 로그인, 회원가입 (생성/조회)
     x [Express] 회원정보 (수정/삭제)

  2. 게시판 :
      => 커뮤니티, 회원간 소통 창구
      - [Express] 동적으로 목록 표시 및 정렬 
      x [Express] 상세화면 : 게시글 (조회), 댓글 (조회)
      x [Express] 게시글 (생성/수정/삭제)
      x [Express] 댓글 (생성/수정/삭제)

  3. 쳇봇 :
      => 편의성, 서비스 안내
      - [React] [Chatbot] 기본적은 UI 적용
      x [Flask] [API-OpenAI] 통해 GPT 연결

  4. 지도 
      => 검색 및 조회 서비스
      - [Flask] [API-GeoEncoder] 검색 기능 구현
      - [React] [API-Kakao-Map] 지도 표시

  5. 통계
      => 공공 데이터 조회 서비스
      - [React] [Chart] 화면에 차트 표시하기
      x [Flask] [API-OpenAPI] 공공 데이터 불러오기
      x [React] [API-Kakao-Map] 클릭한 데이터 위치로 이동
`

const styleDisplayPre = {fontWeight: 'bold', fontSize: '25px'}
const styleDisplayCenter = { display: 'block', margin: '0 auto' }
 
return (
   <div id='about'>
     <pre style={styleDisplayPre}>{text}</pre><br/>
     <h3> 2024.04.12. 설계 초안</h3>
     <img style={styleDisplayCenter} src={imgsrc1} alt='230412설계'  />
   </div>
 );
}

  export default About