// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    return _.chain(items)
            .groupBy("username")
            .map((comments, username ) => { 
                return { 
                    username: username, 
                    comment_count: _.size(comments)
                }
            })
            .sortBy('comment_count')
            .reverse();
};

// export the worker function as a nodejs module
module.exports = worker;