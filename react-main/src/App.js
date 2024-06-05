import React, { useState, useEffect } from 'react';
import './css/App.css';

import Navigation from './commponent/semantic/Navigation';
import Main from './commponent/semantic/Main';
import Footer from './commponent/semantic/Footer';
import Chatbot from './commponent/Chatbot';

function App() {
  const [getNavData, setNavData] = useState({
    'title' : '부동산 데이터 조회 서비스',
    'data' : [
    {url:'/', name:'소개'},
    {url:'/map', name:'지도'},
    {url:'/static', name:'통계'},
    {url:'/board', name:'게시판'},
    {url:'/login', name:'로그인'}
  ]})

  const [getUser,setUser] = useState({
    isLogined:false,
    userId:'',
    userName:'',
    kakaoAccess:{},
    kakaoMyData:{}
  })
  
  useEffect(()=>{
    setNavData((prevData) => {
      const newData = {...prevData};
      newData.data[newData.data.length - 1].name = getUser.isLogined? '마이페이지': '로그인';
      return newData;
    });

  },[getUser])
  
  return <div className="App">        
    <Navigation props={{getNavData}}/>
    <Main props={{getUser, setUser}}/>
    <Footer/>
    <Chatbot getUser={getUser}/>
  </div>;
}

export default App;