const router = require('express').Router();
const db_postUpdate = require('../db/db_postUpdate');

router.post('/',async (req,res)=>{
    const {title,content,userIdx,postIdx} = req.body
    console.log({title,content,userIdx,postIdx})
    
    const result = await db_postUpdate(title,content,userIdx,postIdx)
    console.log(result)
    res.json(result)
})

module.exports = router