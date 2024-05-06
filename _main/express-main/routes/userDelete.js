const router = require('express').Router();
const db_userDelete = require('../db/db_userDelete');

router.post('/', async (req, res) =>{
    const {userId} = req.body;

    const userDelete = await db_userDelete(userId)

    if(userDelete.isSucceed){
        // 가입 성공
        return res.status(200).json({isSucceed:true, msg:'회원 탈퇴 성공'});
    }else{
        // 에러 발생
        console.log(userDelete.error)
        return res.status(400).json({isSucceed:false, msg: userDelete.error});    
    }

})

module.exports = router;