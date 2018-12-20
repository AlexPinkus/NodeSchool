// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
var coins = {};
coins['p'] = 1;
coins['n'] = 5;
coins['d'] = 10;
coins['q'] = 25;
console.log(24%25);
var coinsByAmount = ['q', 'd', 'n', 'p'];



module.exports = {
    getAmount: function (coinType) {
        if (!coins[coinType]) { throw new Error('Unrecognized coin ' + coinType); }
        return coins[coinType];
    },

    convertToChange: function (cents) {
        var temp = cents;
        var change = [];
        coinsByAmount.forEach(coinName => {
            let coinQuantity = Math.floor(temp / coins[coinName]);
            for (let index = 0; index < coinQuantity; index++) {
                change.push(coinName);
            }
            if ( coinQuantity > 0) {  
                temp = temp % coins[coinName];
            }
        });

        return change;
    },
    
};