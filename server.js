var express = require("express");
var cors = require("cors")

var app = express();

// enable cors for everyone
app.use(cors());

app.get('/', async (req, res) => {
    res.json({
        res: 200
    });
});

app.post('/', async (req, res) => {
    res.json(req.body);
});

var post = 3000;
app.listen(post)
