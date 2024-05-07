const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json({
        body:req.body,
        query:req.query,
        params:req.params,
        session:req.session
    });
});

module.exports = router;
