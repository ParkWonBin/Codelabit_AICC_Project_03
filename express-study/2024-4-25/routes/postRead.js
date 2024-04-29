const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

// oracledb.initOracleClient({libDir: 'C:\\JHLee\\Util\\instantclient_21_13'});

router.get('/', async (req, res) => {

    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe' // 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경
    });

    const sql = 'select id, title, content, author from posts order by id desc';
    const result = await conn.execute(sql);
    console.log(result)

    let resultJson = { data:[]};
    for (let i = 0; i < result.rows.length; i++) {
        const data = {
            id : result.rows[i][0],
            title : result.rows[i][1],
            content : result.rows[i][2],
            author : result.rows[i][3]
        };
        resultJson.data.push(data);
    }

    await conn.close();

    const bind = {
        resultJson : resultJson,
        username : req.session.username
    }

    res.render('postRead', bind ); // resultJson 전달
    // console.log(req.session.username)
    // console.log(resultJson)
});


module.exports = router;