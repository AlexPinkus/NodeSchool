const path = require('path');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    const inverted = req.body.str.split('').reverse().join('');
    res.end(inverted);
});

app.listen(process.argv[2], ()=>{
    console.log('Server listening on port: ', process.argv[2]);
});