const router = require('express').Router();
const db_commentCreate = require('../db/db_commentCreate');

router.post('/', async (req,res)=>{
    const {content, userIdx, postIdx, parentIdx} = req.body

    console.log({content, userIdx, postIdx, parentIdx})
    const result = await db_commentCreate(content, userIdx, postIdx, parentIdx)

    console.log(result)
    return res.json(result)
})

module.exports = router