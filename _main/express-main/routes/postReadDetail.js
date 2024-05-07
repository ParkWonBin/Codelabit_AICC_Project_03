const router = require('express').Router();
const db_postReadDetailComments = require('../db/db_postReadDetailComments');
const db_postReadDetailPost = require('../db/db_postReadDetailPost');

router.post('/post',async (req,res)=>{
    const {postId} = req.body
    const result = await db_postReadDetailPost(postId)
    res.json(result)
})

router.post('/comments',async (req,res)=>{
    const {postId} = req.body
    const result = await db_postReadDetailComments(postId)
    res.json(result)
})

module.exports = router