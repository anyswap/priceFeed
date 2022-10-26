
module.exports = {
    calcNewPrice: function (prices) {
        switch (prices.length) {
            case 0: {
                return 0;
            }
            case 1: {
                return prices[0].price
            }
            case 2: {
                return (this.calcWeightedValue(prices[0]) + this.calcWeightedValue(prices[1])) / (prices[0].weight + prices[1].weight)
            }
            default: {
                let totalPrice = 0;
                let totalWeight = 0;
                let calcWeight = 0;
                for (i = 0; i < prices.length; i++) {
                    totalWeight += prices[i].weight;
                    console.log(`priceInfo price:${prices[i].price} weight:${prices[i].weight}`)
                    if (prices[i].price == undefined || prices[i].price > 0) {
                        calcWeight += prices[i].weight;
                        totalPrice += this.calcWeightedValue(prices[i])
                    }
                }
                console.log(`totalWeight:${totalWeight} calcWeight:${calcWeight} totalPrice:${totalPrice}`)
                return (calcWeight / totalWeight < 0.66) ? 0 : totalPrice / calcWeight;
            }
        }
    },
    cmpPriceAndTime: function (oldPirce, lastUpdateTime, newPrice) {
        const priceDiff = Math.abs(newPrice - oldPirce)
        console.log(`oldPirce :${oldPirce} newPrice:${newPrice} priceDiff:${priceDiff} priceRateDiff:${priceDiff / oldPirce} lastUpdateTime:${lastUpdateTime} newTime:${Math.floor(new Date() / 1000)} timeDiff:${Math.floor(new Date() / 1000) - lastUpdateTime}`)
        return (priceDiff / oldPirce >= 0.005) || (Math.floor(new Date() / 1000) - lastUpdateTime) >= 300 ? true : false;
    },
    calcWeightedValue: function (priceInfo) {
        return priceInfo.price * priceInfo.weight
    }
};