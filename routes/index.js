var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        res: 200
    });
});

router.post('/', async (req, res) => {
    res.json(req.body);
});


module.exports = router;
