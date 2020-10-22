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

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
let tokenList = {};

router.use(expressJwt({
    secret: 'secret123456',
    algorithms: ['HS256'] // https://stackoverflow.com/questions/39239051/rs256-vs-hs256-whats-the-difference
}).unless({
    path: ['/', '/login']
}))

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
