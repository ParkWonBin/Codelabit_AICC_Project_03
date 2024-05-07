const router = require('express').Router();
const db_postCreate = require('../db/db_postCreate');

router.post('/', async (req,res)=>{
    console.log(req.body)
    const {title,content,userIdx} = req.body
    const result = await db_postCreate(title,content,userIdx)
    console.log(result)
    return res.json(result)
})

module.exports = router