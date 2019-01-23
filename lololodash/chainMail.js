// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    return _.chain(items)
            .map(word => (word + "CHAINED").toUpperCase())
            .sortBy();
};

// export the worker function as a nodejs module
module.exports = worker;