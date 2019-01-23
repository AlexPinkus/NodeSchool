// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    return _.chain(items)
            .groupBy("article")
            .map((article, key) => {
                const totalOrders = _.reduce(article, (acc, item) => {
                    return acc += item.quantity;
                }, 0)
                return {
                    article: Number(key),
                    total_orders: totalOrders
                };
            })
            .sortBy('total_orders:')
            .reverse()
            .value();
};

// export the worker function as a nodejs module
module.exports = worker;