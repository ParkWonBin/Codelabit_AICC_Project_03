const express = require('express');
const router = express.Router();
const {query} = require("express");
const oracledb = require('oracledb');

// 행동원칙.
// 1. 일단 호의를 베풀자.
//    - 훈련생, 학생 | 선생. 조교.
//  내가 내 시간과. 노력. 정성. 감정. =>> 나한테 안쓰고 주변사람들한테 주고있어.
//  당연한 것이 아님.
// 이유 : 보람. 내가 현재 할 수 있는 것 중 최선을 하고 싶고. 그 결과가 정작하게 나오면 좋다.
// 시간을 낭비해도 좋을만큼 시간이 넘처나는 사람이냐, <- 그럴거면 퇴사 왜함;;;
// 사회 복지사나 투철한 의식을 갖고 좋은 일을 하는 사람이냐, <- 아니다...
// 나는 내 시간의 결과가 헛되지 않았으면 좋겠고, 그거 하나면 된다.
// 형은 내가 가장 많은 시간과 감정과 정성을 들이고 있는 사람이다.
// 이 과정이 끝나고 형의 앞으로의 삶이 보다 행복하기를 바래요.
// '열심히'는 중요하지 않아. 과정을 보는 사람은 애초에 없어.
// '결과'가 사실 전부일 때가 많죠.. 그런데 난 그렇게 살기 싫어. 그래서.
// '열심히'하는 사람들을 돕고 있는거고, 결과는 부산물이라고 믿고 싶어서 그러고 있어요.
// 진중하게. 잘 했으면 좋겠다.


// GET 요청을 처리하여 수정 폼을 렌더링합니다.
// router.get('/:id', async (req, res) => {
//     const postId = req.params.id;
//
//     // key : value ; object ; {key : value, k1:v1}
//     // req.body // form테그의 input에서 데이터를 얻었다.bodyparser가 필요하다.
//          input 태그의 name이 key가 되고, value 가 value가 된다.
//          textarea 태그의 경우 name이 key가 되고, value는 해당 태크의 하위에 있는 글자들이 된다.
//          textarea 태그는 입력값을 value 속성으로 제어하는 것이 아닌. 해당 태그 내부의 문자열로 관리하기 때문이다.
//     // req.query // url에서 "?" 뒤로 key value 패턴이 주어진다. url에서 "?k1=v1&k2=v2" 라면 {k1:"v1",k2:"v2"}를 얻는다.
//     // req.params // url에서 패턴에서 data를 가져온다. form 테그의 action을 확인하라. "/:id/:data" 이렇게 있다면, 요청 url 과 매칭해서 data를 받아온다.
//     // url = http://localhost:3000/update/123/1234
//     // url = http://localhost:3000?id=123&data=12312455
//
//     req.params // router.get 함수의 1번째 인수에 key가 있고, form 태그 action에 value가 있음.
//
//     try {
//         const conn = await oracledb.getConnection({
//             user: 'username',
//             password: '0904',
//             connectString: 'localhost:1521/xe'
//         });
//
//         // 해당 ID의 게시글 정보를 불러와서 전달
//         const result = await conn.execute('SELECT id, title, content FROM posts WHERE id = :id', [postId]);
//         const post = {
//             id: postId,
//             title: result.rows[0][1],
//             content: result.rows[0][2],
//         };
//
//         await conn.close();
//
//         res.render('update', { post }); // 게시글 정보를 update.ejs에 전달
//
//     } catch (err) {
//         console.error('게시글 조회 오류:', err);
//         res.status(500).send('게시글을 조회하는 중 오류가 발생했습니다.');
//     }
// });
router.post('/edit',(req,res)=>{
    // 수정 환면으로 들어가고 싶음.
    // 1. 이전 게시물의 내용을 가져오기
    console.log(req.body)
    const bind = {
        postId: req.body.postId,
        content: req.body.content,
        title: req.body.title
    }
    // 2. 수정하기 버튼 활성화 (ejs 보여줘야함)
    res.render('update',bind)
})
// POST 요청을 처리하여 게시글을 수정합니다.
router.post('/', async (req, res) => {
    // 수정된 데이터를 DB에 적용/반영 한다.
    // 1. 수정된 데이터를 가져오고
    // 2. 가져온걸 sql 쿼리로 만들고
    // 3. 그 쿼리를 수행하고.
    // 4. 결과를 보여주고.


    // 개발전 환경(입력값 종류와 값) 확인
    // const data= {
    //     params : req.params,
    //     body: req.body,
    //     query : req.query
    // }
    // res.json(data)

    // 확인해보니 body에 다 있더라. 그래서 넣었다.
    // const {postid, title, content} = req.body
    //
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

    // 오라클 > 업데이트 쿼리
    const query = 'update posts set title = :title, content = :content where id = :postid'
    const bind = {
        postid: req.body.postId,
        content: req.body.content,
        title: req.body.title
    }
    const result = await conn.execute(query, bind);
    console.log(result)
    await conn.commit();
    await conn.close();

    res.redirect('/');

    // res.render('update',bind)

    // await conn.execute(query, bind);
    // 오라클 변경사항 저장(commit)
    // await conn.commit();
    // 성공했다면 / 실패했다면 처리.. -> 선택사항


    // 처리할거 다 했으니 고객한테 화면 보여줘야함.
    // res. 뭐시기 해야하는데.. render를 하자니 data가져와야하고, sendfile 하자니, db에서 게시글 목록 보여줘야함.
    // res.redirect('/')
    // 이렇게하면, 그냥 App.js 에서, '/'로 get 요청했을 때와 동일하게 동작함.
});
//
//
// // router.post('/', async (req, res) => {
//     // 모든 프로그램은 입력을 받는데서 시작한다.
//     // 개발 시작 전에, 모든 입력값 확인용 객체 생성
//     // const data= {
//     //     params : req.params,
//     //     body: req.body,
//     //     query : req.query
//     // }
//
//     // 데이터 잘 가져왔는지 확인
//     // const postId = req.params.id
//     // const {content, title} = req.body
//     // console.log(`postId : ${postId}\ntitle : ${title}\ncontent : ${content}`)
//
//     // 수정화면에서 해당 data를 보여주면 됨.
//     // const bindData = {
//     //     postId: req.body.postId,
//     //     content: req.body.content,
//     //     title: req.body.title
//     // }
//     // res.render('update',bindData)
//
//
//     // 개발 시작 전에, 모든 입력값 확인용 응답(res.json)
//     // 과정을 만들기 전에, 입력이 잘 되는지, 내가 사용 가능한건 뭐가 있는지 체크
//     // res.json(data)
//
//     //----------------------------
//     // const postId = req.params.id;
//     // const { title, content } = req.body;
//     // try {
//     //     const conn = await oracledb.getConnection({
//     //         user: 'username',
//     //         password: '0904',
//     //         connectString: 'localhost:1521/xe'
//     //     });
//     //
//     //     // 게시글 수정
//     //     await conn.execute('UPDATE posts SET title = :title, content = :content WHERE id = :id', [title, content, postId]);
//     //     await conn.commit();
//     //     await conn.close();
//     //
//     //     res.redirect('/'); // 수정 후 홈페이지로 redirect
//     //
//     // } catch (err) {
//     //     console.error('게시글 수정 오류:', err);
//     //     res.status(500).send('게시글을 수정하는 중 오류가 발생했습니다.');
//     // }
// // });
module.exports = router;
