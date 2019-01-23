const express = require('express');
const app = express();

app.get('/search', function(req, res) {
    const data = req.query;
    res.send(JSON.stringify(data));
});

app.listen(process.argv[2], ()=>{
    console.log('Server listening on port: ', process.argv[2]);
});