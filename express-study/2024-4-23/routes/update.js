const express = require('express');
const router = express.Router();
const {query} = require("express");
const oracledb = require('oracledb');

router.post('/edit',(req,res)=>{
    // 수정 환면으로 들어가고 싶음.
    // 1. 이전 게시물의 내용을 가져오기
    console.log(req.body)

    const {postId, title, content } = req.body;

    const bind = {
        postId: postId,
        title: title,
        content: content
    }

    // 2. 수정하기 버튼 활성화 (ejs 보여줘야함)
    res.render('update',bind)
})
// POST 요청을 처리하여 게시글을 수정합니다.
router.post('/', async (req, res) => {

    // 이제 오라클 접속
    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });
    // const id = req.body.id
    // const title = req.body.title
    // const content = req.body.content
    console.log(req.body);

    const {postId, title, content } = req.body;

    // 오라클 > 업데이트 쿼리
    const query = 'update posts set title = :title, content = :content where id = :postId'
    const bind = {
        postId: postId,
        title: title,
        content: content
    }

    await conn.execute(query, bind);
    // const result = await conn.execute(query, bind);
    // console.log(result)
    await conn.commit();
    await conn.close();

    res.redirect('/');
});

module.exports = router;
