import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'

const serverBaseURL = process.env.REACT_APP_EXPRESS_URL

const getBoardDetail = async(postId)=>{
  return axios.post(`${serverBaseURL}/postReadDetail/post`, {
    headers: {'Content-Type': 'application/json'}
  });
}
const getBoardComments = async(postId)=>{
    return axios.post(`${serverBaseURL}/postReadDetail/comments`, {
      headers: {'Content-Type': 'application/json'}
    });
  }


function BoardDetail({props}){
    const {getUser} = props
    const [getPostData, setPostData] = useState({})
    const [getCommentsData, setCommentsData] = useState([])
    const [searchParams, _] = useSearchParams();

    // 페이지 들어오자마자 데이터 요청
    useEffect(() => {
        const postId = parseInt(searchParams.get('post_id') );


    }, [searchParams]);

    return(<>BoardDetail

    </>);
};
export default BoardDetail