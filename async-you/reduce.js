var http = require('http'),
    async = require('async');

async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback) {
    // pointless async:
    // callURL(`${process.argv[2]}?number=${item}`, callback)
    // process.nextTick(function() {
    //     callback(null, memo + Number(item))
    // });
    var body = '';
    // response is JSON encoded object like the following {port: 3132}
    http.get(`${process.argv[2]}?number=${item}`, function(res) {
        res.on('data', function(chunk){
            body += chunk.toString();
        });
        res.on('end', function(){
            callback(null, memo + Number(body))
        });
        }).on('error', function(err) {
            console.error(err);
    });

}, function(err, result) {
    // result is now equal to the last value of memo, which is 6
    console.log(result);
});


function callURL(url, done) {
    var body = '';
    // response is JSON encoded object like the following {port: 3132}
    http.get(url, function(res) {
        res.on('data', function(chunk){
            body += chunk.toString();
        });
        res.on('end', function(){
            done(null, body);
        });
        }).on('error', function(err) {
            console.error(err);
    });
}
