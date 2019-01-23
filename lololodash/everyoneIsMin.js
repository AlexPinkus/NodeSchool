// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    let output= {
        hot: [],
        warm: []
    };

    _.forEach(items, function (temperatures, cityName) {
        if ( _.every(temperatures, function(temperature) { return temperature > 19; })) { output.hot.push(cityName) }
        else if ( _.some(temperatures, function(temperature){ return temperature > 19 })) { output.warm.push(cityName) }
    });

    return output;
};

// export the worker function as a nodejs module
module.exports = worker;