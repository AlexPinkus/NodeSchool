// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    const sum = _.reduce(items, (acc, item) => acc +=item.income, 0);
    const average = sum/_.size(items);
    const overperform =_.chain(items).filter((item) => item.income > average).sortBy('income');
    const underperform =_.chain(items).filter((item) => item.income <= average).sortBy('income');

    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    }
};

// export the worker function as a nodejs module
module.exports = worker;