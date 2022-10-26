const AsyncLock = require('async-lock');
const Eth = require('../../utils/eth');
const lock = new AsyncLock();
module.exports = {
    updatePrice: async function (chainId, newPrice) {
        const priceOracleContract = Eth.instancePriceOracleContracts();
        const priceDecimal = await priceOracleContract._decimal();
        const realPrice = Math.floor(newPrice * Math.pow(10, priceDecimal));

        await lock.acquire('a', async () => {
            await priceOracleContract.setPrice(chainId, realPrice).then(res => {
                console.log(`chainId:${chainId} update price success,txHash:${res.hash} newPrice:${newPrice}`)
            })
        })
    }
};