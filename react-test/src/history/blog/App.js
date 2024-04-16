import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉,따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title,settitle] = useState(0);
  let [입력값,입력값변경] = useState('');
  
   
  return (
    <div className="App">
      <div className="black-nav">
       
      </div>

      {
        글제목.map(function(a ,i){
          return ( 
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true); settitle(i)}} > 
              {글제목[i]} 
              <span onClick={(e) => { e.stopPropagation(); 따봉변경(따봉+1) }}>👍</span> 
              {따봉}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                
              }}>삭제</button>
            </div> 
          )
        }) 
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
        }}>글발행</button>

   

      { 
      modal == true ? <Modal title={title} 글제목={글제목}/> : 
      null 
      }
    </div>
  );
}


function Modal(props){
  return(
    <div className="modal">
      <h4>{props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
