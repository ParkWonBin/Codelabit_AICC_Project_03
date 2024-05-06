const router = require('express').Router();
const db_userCreate = require('../db/db_userCreate');
const db_userCheckExist = require('../db/db_userCheckExist');

router.get('/', async (req, res) => {
    res.render('userCreate');
});

router.post('/', async (req, res) => {
    const {userId,userName, userPw, userPwConfirm} = req.body;

    // 비밀번호 확인
    if (userPw !== userPwConfirm) {
        return res.status(200).json({isSucceed:false, msg:'비밀번호가 일치하지 않습니다.'});
    }

    // 아이디 중복체크 확인
    const CheckUserID = await db_userCheckExist(userId)
    if(CheckUserID.isExist){
        return res.status(200).json({isSucceed:false, msg:'이미 존재하는 아이디입니다.'});
    }

    // 회원 가입처리
    const createUser = await db_userCreate(userId, userPw, userName)
    if(createUser.isSucceed){
        // 가입 성공
        return res.status(200).json({isSucceed:true, msg:'회원 가입 성공'});
    }else{
        // 에러 발생
        console.log(createUser.error)
        return res.status(200).json({isSucceed:false, msg: createUser.error});    
    }
});

module.exports = router;