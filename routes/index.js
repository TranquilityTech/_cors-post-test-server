var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        res: 200
    });
});

router.post('/', async (req, res) => {
    res.status(200).json(req.body);
});

router.post('/login', (req, res, next) => {
    const token = jwt.sign({
        name: "test"
    }, "jwtTokenSecret", {
        expiresIn: 10
    });
    const refreshToken = jwt.sign({
        name: "test"
    }, "refreshTokenSecret", {
        expiresIn: 10
    })
    const response = {
        token,
        refreshToken
    }

    tokenList[refreshToken] = response;

    res.status(200).json(response);
});


module.exports = router;
