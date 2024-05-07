import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import './Board_.css'
const serverBaseURL = process.env.REACT_APP_EXPRESS_URL

const getBoardData = async()=>{
  return axios.get(`${serverBaseURL}/postReadBoard`, {
    headers: {'Content-Type': 'application/json'}
  });
}

function Board(){
    const navigate = useNavigate();

    const [searchParams, ] = useSearchParams();
    const [getPageCnt, setPageCnt] = useState(5);
    const [getPostCnt, setPostCnt] = useState(10);
    const [getCurPage, setCurPage] = useState(1);
    const [getPostList, setPostList] = useState([]);
    // const [getPostList, setPostList] = useState([
    //     {idx:1,title:'post_1',author:'익명1',datetime:'2024.04.01'},
    //     {idx:2,title:'post_2',author:'익명2',datetime:'2024.04.02'},
    //     {idx:3,title:'post_3',author:'익명3',datetime:'2024.04.03'},
    //     {idx:4,title:'post_4',author:'익명4',datetime:'2024.04.04'},
    //     {idx:5,title:'post_5',author:'익명5',datetime:'2024.04.05'},
    //     {idx:6,title:'post_6',author:'익명6',datetime:'2024.04.06'},
    //     {idx:7,title:'post_7',author:'익명7',datetime:'2024.04.07'},
    //     {idx:8,title:'post_8',author:'익명8',datetime:'2024.04.08'},
    //     {idx:9,title:'post_9',author:'익명9',datetime:'2024.04.09'},
    //     {idx:10,title:'post_10',author:'익명10',datetime:'2024.04.10'},
    //     {idx:11,title:'post_11',author:'익명11',datetime:'2024.04.11'},
    //     {idx:12,title:'post_12',author:'익명12',datetime:'2024.04.12'},
    //     {idx:13,title:'post_13',author:'익명13',datetime:'2024.04.13'},
    //     {idx:14,title:'post_14',author:'익명14',datetime:'2024.04.14'},
    //     {idx:15,title:'post_15',author:'익명15',datetime:'2024.04.15'},
    //     {idx:16,title:'post_16',author:'익명16',datetime:'2024.04.16'},
    //     {idx:17,title:'post_17',author:'익명17',datetime:'2024.04.17'},
    //     {idx:18,title:'post_18',author:'익명18',datetime:'2024.04.18'},
    //     {idx:19,title:'post_19',author:'익명19',datetime:'2024.04.19'},
    //     {idx:20,title:'post_20',author:'익명20',datetime:'2024.04.20'},
    //     {idx:21,title:'post_21',author:'익명21',datetime:'2024.04.21'},
    //     {idx:22,title:'post_22',author:'익명22',datetime:'2024.04.22'},
    //     {idx:23,title:'post_23',author:'익명23',datetime:'2024.04.23'},
    //     {idx:24,title:'post_24',author:'익명24',datetime:'2024.04.24'},
    //     {idx:25,title:'post_25',author:'익명25',datetime:'2024.04.25'},
    // ])
    const handleLinkVisitPost = (post_idx)=>{
        navigate(`/board/detail?post_idx=${post_idx}`);  // 이동하고자 하는 경로
    }

    // useEffect 에서는 async 쓸 수 없어서 이렇게 간접적으로 처리한다.
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let res = await getBoardData(); 
                console.log(res.data);
                setPostList(res.data); 
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        // Call the async function
        fetchData();
    },[])

    useEffect(() => {
        const curPage = parseInt(searchParams.get('curPage') || 1, 10);
        const postCnt = parseInt(searchParams.get('postCnt') || 5, 10);
        setCurPage(curPage);
        setPostCnt(postCnt);
    }, [searchParams]);

    const setCurPageInput = (e) => {
        let x = parseInt(e.target.value, 10);
        if (x < 1) x = 1;
        setCurPage(x);
    };
    const setPostCntInput = (e) => {
        let x = parseInt(e.target.value, 10);
        if (x < 1) x = 1;
        if (x > 100) x = 100;
        setPostCnt(x);
    };
    const setPageCntInput = (e) => {
        let x = parseInt(e.target.value, 10);
        if (x < 3) x = 3;
        if (x > 10) x = 10;
        setPageCnt(x);
    };
    // 최신순 정렬
    const sortNewestFirst = () => {
        const sortedPosts = [...getPostList].sort((a, b) => b.datetime.localeCompare(a.datetime));
        setPostList(sortedPosts);
    };

    // 오래된순 정렬
    const sortOldestFirst = () => {
        const sortedPosts = [...getPostList].sort((a, b) => a.datetime.localeCompare(b.datetime));
        setPostList(sortedPosts);
    };


    // 시작 포스트 idx와 전체 페이지 개수 계산
    const prevBtnCnt = Math.floor((getPageCnt-1) / 2) 
    const totalPages = Math.ceil(getPostList.length / getPostCnt);

    const startPostIdx = getPostCnt * (getCurPage-1)
    const startPageIdx = Math.max(1, getCurPage - prevBtnCnt)

    return <div id='PostBoardContainer'>
    
    <div id='postHeaderContainer'>
      <h3 id = 'postHeader'>게시판</h3>
      <button id='postWrite' onClick={()=>{navigate(`/board/create`)}}>글쓰기</button>
    </div>
    <p> 현재 페이지는 
        <input 
            id='curPageInput' 
            type="number" 
            value={getCurPage}
            onChange={setCurPageInput} 
            min="1" 
        />페이지 입니다.
    </p>
    <p> 게시글은 한번에 
        <input
            id='postCntInput' 
            type="number"
            value={getPostCnt}
            onChange={setPostCntInput}
            min="1"
            max="100"
        /> 개씩 조회합니다. (1~100개 사이)
    </p>
    <p> 페이지 번호는 한번에 
        <input
            id='pageCntInput' 
            type="number"
            value={getPageCnt}
            onChange={setPageCntInput} 
            min="3" 
            max="10" 
        /> 개씩 표시합니다. (3~10개 사이)
    </p>
    <p> 날짜를 기준으로 정렬합니다.
        <button className='sortBtn' onClick={sortNewestFirst}> 최신순 </button>
        <button className='sortBtn' onClick={sortOldestFirst}> 오래된순 </button>
    </p>
    <table id='PostBoard'>
        <thead>         
            <tr>
                <th key='0'>idx.</th>
                <th key='1'>제목</th>
                <th key='2'>작성자</th>
                <th key='3'>작성일</th>
            </tr>
        </thead>
        <tbody>
            {getPostList.slice(startPostIdx,startPostIdx+getPostCnt).map((post,idx)=>{return(
                <tr key={idx} onClick={()=>{handleLinkVisitPost(post.idx)}}>
                    <td key='0'>{post.idx}</td>
                    <td key='1'>{post.title}</td>
                    <td key='2'>{post.author}</td>
                    <td key='3'>{post.datetime}</td>
                </tr>)
            })}
        </tbody>
    </table>

    <ul>
        { // 첫번째 페이지로 가기
        (startPageIdx > 1)
        ? <li key={0}><Link to={`/board?curPage=${1}&postCnt=${getPostCnt}`}>{`첫번째(1)`}</Link></li>
        : <></>
        }

        {// 이전 이후 페이지 버튼
        Array.from({ length: Math.min(getPageCnt, totalPages-(startPageIdx)+1) }, (_, i) => (
        <li key={startPageIdx+i} className={startPageIdx+i === getCurPage? 'curPage':''}>
            <Link to={`/board?curPage=${startPageIdx+i}&postCnt=${getPostCnt}`}>{startPageIdx+i}</Link>
        </li>
        ))}

        { // 마지막 페이지로 가기
        (startPageIdx + getPageCnt <= totalPages)
        ? <li key={totalPages}><Link to={`/board?curPage=${totalPages}&postCnt=${getPostCnt}`}>{`마지막(${totalPages})`}</Link></li>
        : <></>
        }
    </ul>
    </div>
  }

  export default Board