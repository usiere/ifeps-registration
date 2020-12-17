const express = require('express')
const app = express()

const router = express.Router();

app.get('/', function (req, res) {
    res.send('we are on the certs');
});

module.exports = router;