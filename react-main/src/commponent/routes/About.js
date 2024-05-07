import './About.css'
import imgsrc1 from '../../20240412_architecture.png'

function About(){
  const text =`# 구현 내용

  1. 로그인 :
      => 회원관리, 개인화 서비스
     - [Express] [API-Kakao-OAuth] 소셜 로그인
     - [Express] 로그인, 회원가입, 회원탈퇴 (생성/조회/삭제)

  2. 게시판 :
      => 커뮤니티, 회원간 소통 창구
      - [Express] 동적으로 목록 표시 및 정렬 
      - [Express] 상세화면 : 게시글 (조회), 댓글 (조회)
      - [Express] 게시글 (생성/수정/삭제)
      - [Express] 댓글 (생성/삭제)
      - [Express] 대댓글 기능 (내용에 "@숫자"로 댓글 id 입력)

  3. 쳇봇 :
      => 편의성, 서비스 안내
      - [React] [Chatbot] 기본적은 UI 적용
      - [Flask] [API-OpenAI] GPT 연결하여 응답 표시
      - [Flask] [API-OpenAI] GPT 과금 계산하여 표시

  4. 지도 
      => 검색 및 조회 서비스
      - [Flask] [API-GeoEncoder] 검색 기능 구현
      - [React] [API-Kakao-Map] 지도 표시

  5. 통계
      => 공공 데이터 조회 서비스
      - [React] [Chart] 화면에 차트 표시하기
      - [Flask] 더미 데이터 불러오기
      - [React] [API-Kakao-Map] 클릭한 데이터 위치로 이동
      x [Flask] [API-OpenAPI] 공공 데이터 불러오기(더미)
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