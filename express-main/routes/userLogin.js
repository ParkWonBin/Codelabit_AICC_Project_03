const router = require('express').Router();
const db_userLogin = require('../db/db_userLogin')

router.get('/', async (req, res) => {
    res.render('userLogin');
});

router.post('/', async (req, res) =>{
    const {userId, userPw} = req.body;
    console.log({userId, userPw})

    result = await db_userLogin(userId, userPw)
    console.log(result)

    if(result.isSucceed){
        req.session.userId = userId;
        res.json({...result, msg:'로그인 성공'});
    }else{
        res.json({...result, msg:'로그인 실패'})
    }
});

module.exports = router;