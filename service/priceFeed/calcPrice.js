
module.exports = {
    calcNewPrice: function (prices) {
        switch (prices.length) {
            case 0: {
                return 0;
            }
            case 1: {
                return prices[0]
            }
            case 2: {
                return (prices[0] + prices[0]) / 2
            }
            default: {
                prices.sort()
                let totalPrice = 0;
                for (i = 1; i < prices.length - 1; i++) {
                    totalPrice += prices[i]
                }
                return totalPrice / (prices.length - 2)
            }
        }
    },
    cmpPriceAndTime: function (oldPirce, lastUpdateTime, newPrice) {
        const priceDiff = Math.abs(newPrice - oldPirce)
        console.log(`oldPirce :${oldPirce} newPrice:${newPrice} priceDiff:${priceDiff} priceRateDiff:${priceDiff / oldPirce} timeDiff:${Math.floor(new Date() / 1000) - lastUpdateTime}`)
        return (priceDiff / oldPirce >= 0.005) || (Math.floor(new Date() / 1000) - lastUpdateTime) >= 300 ? true : false;
    }
};