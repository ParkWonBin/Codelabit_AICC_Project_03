import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import './Board_Create.css'
const serverBaseURL = process.env.REACT_APP_EXPRESS_URL


// 게시글 정보 가져오기
const postCreate = async(title,content,userIdx)=>{
    let result = {}
    try {
      result = await axios.post(`${serverBaseURL}/postCreate`, {
          title, 
          content, 
          userIdx
      }, {
          headers: { 'Content-Type': 'application/json' }
      }).then(res=>res.data);
      return result
  } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
  }
}

const BoardCreate = ({props})=>{
    const navigate = useNavigate();

    const {getUser} = props
    const [getTitle,setTitle] = useState('')
    const [getContent,setContent] = useState('')

    // 로그인 안한사람 로그인 시키기
    useEffect(()=>{
        if(!getUser.isLogined){ 
            navigate('/login')
        }
    },[getUser,navigate])


    const handleSubmitBtn = async ()=>{
      // 
      const res = await postCreate(getTitle,getContent,getUser.userIdx)
      if(res.isSucceed){
        alert('게시글 등록 성공!')
        navigate(`/board/detail?post_idx=${res.postIdx}`)
      }else{
        alert('게시글 등록 실패!')
      }
    }
    

    return(<div className='panel'>

    <h1>신규 게시글 작성</h1>
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
      <button className='submitBtn' onClick={handleSubmitBtn}>작성하기</button>
    </div>

</div>);
};
export default BoardCreate