var http = require('http'),
    async = require('async');

var count = 0;
var desiredString = "meerkat";
var result;

async.whilst(
    function() { return result !== desiredString; },
    function(callback) {
        count++;
        callURL(process.argv[2], callback)
    },
    function (err, n) {
        // 5 seconds have passed, n = 5
        result = n;
        console.log(count);
    }
);

function callURL(url, done) {
    var body = '';
    // response is JSON encoded object like the following {port: 3132}
    http.get(url, function(res) {
        res.on('data', function(chunk){
            body += chunk.toString();
        });
        res.on('end', function(){
            result= body;
            done(null, body);
        });
        }).on('error', function(err) {
            console.error(err);
    });
}
