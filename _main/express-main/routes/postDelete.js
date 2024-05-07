const router = require('express').Router();
const db_postDelete = require('../db/db_postDelete');

router.post('/', async (req,res)=>{
    const {postIdx, userIdx} = req.body
    const result = await db_postDelete(postIdx, userIdx)
    console.log(result)
    return res.json(result)
})

module.exports = router