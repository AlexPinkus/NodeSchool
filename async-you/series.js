var http = require('http'),
    async = require('async');

async.series({
    requestOne: function(done) {
        callURL(process.argv[2], done);
    },
    requestTwo: function(done){
        callURL(process.argv[3], done);
    }
  }, function(err, results){
    if (err) return console.error(err);
    console.log(results);
    // results will be {one: 1, two: 2}
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