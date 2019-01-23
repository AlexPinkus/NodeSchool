// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    let sorted = _.sortBy(items, 'quantity');
    return sorted.reverse();
};

// export the worker function as a nodejs module
module.exports = worker;