// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {

    return _.template('Hello <%= name %> (logins: <%= logins %>)')({ name: items.name, logins: _.size(items.login) });
};

// export the worker function as a nodejs module
module.exports = worker;