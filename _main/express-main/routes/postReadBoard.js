const router = require('express').Router();
const db_postReadBoard = require('../db/db_postReadBoard');

router.get('/',async (req,res)=>{
    res.json(await db_postReadBoard())
})

module.exports = router