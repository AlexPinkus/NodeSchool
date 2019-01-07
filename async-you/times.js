var http = require('http'),
    async = require('async');




async.series({
    requestOne: function(done) {
        async.times(5, function(n, next) {
            createUser(n, function(err, user) {
                next(err, user);
            });
        }, function(err, users) {
            // we should now have 5 users
            done(null, 'created')
        })
    },
    requestTwo: function(done){
        callURL({
            hostname: process.argv[2],
            port: process.argv[3],
            path: '/users'
        }, done);
    }
  }, function(err, results){
    if (err) return console.error(err);
    console.log(results.requestTwo);
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
        });
        }).on('error', function(err) {
            console.error(err);
    });
}

function createUser(id, done) { 
    var opts = {
        hostname: process.argv[2],
        port: process.argv[3],
        path: '/users/create',
        method: 'POST'
    };
    var body = '';
    var req = http.request(opts, function(res){
    res.on('data', function(chunk){
        body += chunk.toString();
    });
    res.on('end', function(){
        return done(null, body);
    });
    });
    req.write(JSON.stringify({"user_id": id+1}));
    req.end();
}