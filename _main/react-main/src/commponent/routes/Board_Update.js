import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

import './Board_CreateUpdate.css'
const serverBaseURL = process.env.REACT_APP_EXPRESS_URL


// 게시글 정보 가져오기
const postUpdate = async(title,content,userIdx,postIdx)=>{
    let result = {}
    try {
      result = axios.post(
        `${serverBaseURL}/postUpdate`,
       {title,content,userIdx,postIdx},
       {headers: {'Content-Type': 'application/json'}}
      ).then(res=>res.data);
      return result
    } catch (error) {
      console.log(error)
    }    
    return result
  }

function BoardEdit({props}){
    const {getUser} = props
    const navigate = useNavigate();
    
    // state 객체에서 데이터 추출
    const location = useLocation();
    const { postIdx, postData } = location.state; 
    
    // 전달받은 값으로 state 초기값 설정
    const [getTitle,setTitle] = useState(postData.title)
    const [getContent,setContent] = useState(postData.content)

  const handleSubmitBtn = async ()=>{
    // 게시글 수정
    const res = await postUpdate(getTitle,getContent,getUser.userIdx, postIdx)
    
    if(res.isSucceed){
      // alert('게시글 수정 성공!')
      navigate(`/board/detail?post_idx=${postIdx}`)
    }else{
      alert('게시글 수정 실패!')
    }
  }

    return(<div className='panel'>

    <h1>게시글 수정(idx={postIdx})</h1>
    <label>작성자 : {getUser.userName}({getUser.userId})</label>
    <br/>

    <label htmlFor="createPostTitle">제목</label>
    <input 
      id="createPostTitle"  
      type="text" 
      value={getTitle} 
      onChange={(e) => setTitle(e.target.value)}
    />

    <label htmlFor="createPostContent">내용</label>
    <textarea 
      id="createPostContent" 
      rows="15" 
      cols="50" 
      value={getContent} 
      onChange={(e) => setContent(e.target.value)}
    ></textarea>
    <br />

    <div className="button-group">
      <button className='cancleBtn' onClick={()=>{navigate('/board')}}>취소하기</button>
      <button className='submitBtn' onClick={handleSubmitBtn}>수정하기</button>
    </div>

</div>);
};
export default BoardEdit