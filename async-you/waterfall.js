var http = require('http'),
    url = require('url');
    fs = require('fs');
var filepath = process.argv[2];

fs.readFile(filepath, function (err, data) {
    if (err) throw err;
    var lines=data.toString().split('\n').length-1;
    // console.log(lines);
    // console.log('lines :', lines);
    callURL(url.parse(data.toString()));
});


function callURL(url) {
    var body = '';
    // response is JSON encoded object like the following {port: 3132}
    http.get(url, function(res) {
        res.on('data', function(chunk){
            body += chunk.toString();
        });
        res.on('end', function(){
            console.log(body);
        });
        }).on('error', function(err) {
            console.error(err);
    });
}