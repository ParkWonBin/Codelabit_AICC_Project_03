function About(){
  const text =`# 구현 내용
  1. 로그인 
     O express 회원가입, 로그인
     O kakao 소셜 로그인
  2. 게시판 
     O 동적으로 목록 표시
     O 게시글 정렬 
  3. 쳇봇 
     O 기본적은 UI 적용
     X express 통해 GPT 연결
  4. 통계 
     X flask에서 데이터 불러오기
     X 데이터 화면에 표시
  5. 지도 
     X flask에서 데이터 불러오기
     X 선택한 데이터 지도에 표시
`
 
    return <pre style={{fontWeight:'bold',fontSize:'25px'}}>{text}</pre>
  }

  export default About