const router = require('express').Router();
const db_commentDelete = require('../db/db_commentDelete');

router.post('/', async (req,res)=>{
    const {postIdx,commentIdx} = req.body

    console.log({postIdx,commentIdx})
    const result = await db_commentDelete(postIdx,commentIdx)

    console.log(result)
    return res.json(result)
})

module.exports = router