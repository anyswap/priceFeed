const Eth = require('../../utils/eth');

module.exports = {
    updatePrice: async function (chainId, newPrice) {
        const priceOracleContract = Eth.instancePriceOracleContracts();
        const priceDecimal = await priceOracleContract._decimal();
        const realPrice = Math.floor(newPrice * Math.pow(10, priceDecimal));
        await priceOracleContract.setPrice(chainId, realPrice).then(res => {
            console.log(`chainId:${chainId} update price success,txHash:${res.hash} newPrice:${newPrice}`)
        })
    }
};