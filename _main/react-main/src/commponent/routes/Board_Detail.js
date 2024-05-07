import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import './Board_Detail.css'
const serverBaseURL = process.env.REACT_APP_EXPRESS_URL

// 게시글 정보 가져오기
const getBoardDetailPost = async(postIdx)=>{
  let result = {}
  try {
    result = axios.post(`${serverBaseURL}/postReadDetail/post`,
     {postIdx},{headers: {'Content-Type': 'application/json'}}
    );
  } catch (error) {
    console.log(error)
  }    
  return result
}

// 댓글 목록 가져오기
const getBoardDetailComments = async(postIdx)=>{
  let result = {}
  try {
    result = axios.post(`${serverBaseURL}/postReadDetail/comments`,
     {postIdx},{headers: {'Content-Type': 'application/json'}}
    );
  } catch (error) {
    console.log(error)
  }    
  return result
}

const postDelete = async(postIdx, userIdx)=>{
  let result = {}
  try {
    result = axios.post(`${serverBaseURL}/postDelete`,
     {postIdx, userIdx},{headers: {'Content-Type': 'application/json'}}
    );
  } catch (error) {
    console.log(error)
  }    
  return result
}

function BoardDetail({props}){
  const navigator = useNavigate();

  const {getUser} = props // 나중에 수정/삭제 버튼을 위함
  const [searchParams, ] = useSearchParams();
  const [getPostData, setPostData] = useState({})
  const [getCommentsData, setCommentsData] = useState([])
  const [commentTree, setCommentTree] = useState([]);

  // 페이지 들어오자마자 데이터 요청
  useEffect(() => {
    const postIdx = parseInt(searchParams.get('post_idx') );
    // useEffect 에서는 async 함수 못쓰기 때문에 정의 후 실행.
    const fetchData = async()=>{ 
      try{
        // 비동기적으로 요청하고, then으로 처리
        getBoardDetailPost(postIdx).then(res=>{
          setPostData(res.data)
        });
        // 비동기적으로 요청하고, then으로 처리
        getBoardDetailComments(postIdx).then(res=>{
          setCommentsData(res.data)
        })
      } catch (error){
        console.log(error)
      }
    }
    fetchData()
  }, [searchParams]);

  // Function to process commentsData into a tree structure using DFS
  useEffect(() => {
    const buildCommentTree = () => {
      const commentMap = new Map();
      getCommentsData.forEach(comment => {
        comment.children = [];
        commentMap.set(comment.idx, comment);
      });

      const rootComments = [];
      getCommentsData.forEach(comment => {
        if (comment.parentIdx === null) {
          rootComments.push(comment);
        } else {
          const parentComment = commentMap.get(comment.parentIdx);
          if (parentComment) {
            parentComment.children.push(comment);
          }
        }
      });
      return rootComments;
    };

    setCommentTree(buildCommentTree());
  }, [getCommentsData]);


  // Recursive function to render comments and their nested children
  const renderComments = (comments) => {
    return comments.map(comment => (
      <div className="comment" key={comment.idx}>
      <div className="post-author">
          <strong style={{display: 'inline-block'}}>
              @{comment.idx} : {comment.authorName}({comment.authorId})
              {comment.authorId === getUser.userId
              ?<>[수정][삭제]</>
              :<></>
              }
          </strong>
      </div>
      <p>{comment.content}</p>
      {comment.children && comment.children.length > 0 && (
          <div className="child-comments">
              {renderComments(comment.children)}
          </div>
      )}
  </div>
    ));
  }; 

  const handlePostUpdate = ()=>{
    navigator('/board/update',
    {state:{
      postIdx: parseInt(searchParams.get('post_idx') ),
      postData: getPostData
    }
  })

  }
  const handlePostDelete = async()=>{
    const shouldDelete = window.confirm('정말로 게시글을 삭제하시겠습니까?')
    if(!shouldDelete){return null}

    const postIdx = parseInt(searchParams.get('post_idx'));
    const userIdx = getUser.userIdx
    const res = await postDelete(postIdx, userIdx).then(res=>res.data)
    if(res.isSucceed){
      alert('게시글이 삭제되었습니다.')
      navigator('/board')
    }else{
      alert(JSON.stringify(res))
    }
  }

    return(<>
    {/* <pre>
      post_id : {searchParams.get('post_id')}
      {'\ngetPostData = '+JSON.stringify(getPostData,null,2)}
      {'\ngetCommentsData = '+JSON.stringify(getCommentsData,null,2)}
    </pre> */}

    <div className="post-container">

      <div className="post-content">
        <h2 className="post-title">제목 : {getPostData.title}</h2>
        <p className="post-author">작성자: {getPostData.authorName}({getPostData.authorId})</p>
        <p className="post-date">작성일: {getPostData.created}</p>
        <hr />
        <h3 className="post-title">본문</h3>
        <pre>{getPostData.content}</pre>
      </div>
      
      <div className='bottoms'>
      <button onClick={()=>{navigator('/board')}}>돌아가기</button>
      {getPostData.authorId === getUser.userId
        ?<>
          <button onClick={handlePostUpdate}>수정</button>
          <button onClick={handlePostDelete}>삭제</button>
          </>
        :<></>
      }
      </div>

      <div className="post-comments">
        <h3 className="post-title">댓글({getCommentsData.length})</h3>
        {commentTree && commentTree.length > 0 ? (
          renderComments(commentTree)
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </div>

      <div id="commentForm" >
        <textarea name="comment" rows="4" cols="50" placeholder="댓글을 입력하세요"></textarea>
        <button type="submit">댓글 등록</button>
      </div>
  </div>

</>);
};
export default BoardDetail