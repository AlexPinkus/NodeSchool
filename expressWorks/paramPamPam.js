const express = require('express');
const app = express();

app.put('/message/:id', function(req, res) {
    const id = req.params.id;
    const hashed = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    res.end(hashed);
});

app.listen(process.argv[2], ()=>{
    console.log('Server listening on port: ', process.argv[2]);
});