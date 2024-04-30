const router = require('express').Router();
const db_userLogin = require('../db/db_userLogin')

router.get('/', async (req, res) => {
    res.render('userLogin');
});

router.post('/', async (req, res) =>{
    const {username, password} = req.body;

    result = await db_userLogin(username, password)

    if(result.isSucceed){
        req.session.username = username;
        res.json({msg:'로그인 성공'});
    }else{
        res.json({msg:'로그인 실패'})
    }
});

module.exports = router;