const fs = require('fs');
const express = require('express');
const app = express();
const file = process.argv[3];

app.get('/books', function(req, res) {
    fs.readFile(file, (err, data)=>{
        if (err) throw err;
        const dataJson = JSON.parse(data);
        console.log('data :', dataJson);
        res.json(dataJson);
    })
});

app.listen(process.argv[2], ()=>{
    console.log('Server listening on port: ', process.argv[2]);
});