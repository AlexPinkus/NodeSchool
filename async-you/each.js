var http = require('http'),
    async = require('async');

async.each([process.argv[2], process.argv[3]], function(item, done){
    callURL(item, done);
}, 
function(err){
    if(err) console.error(err);
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
            // console.log(body);
        });
        }).on('error', function(err) {
            console.error(err);
    });
}