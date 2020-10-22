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

const port = process.env.PORT || '3000';
app.set('port', port);
const http = require('http');
http.createServer(app).listen(port);
