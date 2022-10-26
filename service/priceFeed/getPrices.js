const axios = require('axios');
const Config = require('../../config/config');
const Eth = require('../../utils/eth');

module.exports = {
    getPrices: async function (chainId) {
        // get price from uniswap
        const pairsPrices = await this.getPricesFromPairs(chainId);
        // get price from sushiswap
        const apisPrices = await this.getPricesFromApis(chainId);
        // return all prices
        return await Promise.all(pairsPrices.concat(apisPrices))
    },
    getPricesFromPairs: async function (chainId) {
        var prices = [];
        for (i = 0; i < Config.chains[chainId].V2Pairs.length; i++) {
            prices[i] = this.getPriceFromPair(chainId, Config.chains[chainId].V2Pairs[i])
        }
        return prices
    },
    getPricesFromApis: async function (chainId) {
        var prices = [];
        for (i = 0; i < Config.chains[chainId].Apis.length; i++) {
            prices[i] = this.getPriceFromApi(Config.chains[chainId].Apis[i])
        }
        return prices
    },
    getPriceAndTimeFromContract: async function (chainId) {
        const priceOracleContract = Eth.instancePriceOracleContracts()
        const { price, _, lastUpdateTime } = await priceOracleContract.getCurrencyInfo(chainId);
        const priceDecimal = await priceOracleContract._decimal();
        return { price: price / Math.pow(10, priceDecimal), lastUpdateTime }
    },
    getPriceFromPair: async function (chainId, pairInfo) {
        const pairContract = Eth.instancePairContracts(pairInfo.pairAddr, pairInfo.network)
        const { _reserve0, _reserve1, _ } = await pairContract.getReserves();
        const token0 = await pairContract.token0()
        const decimalDiff = Config.chains[chainId].decimal - pairInfo.usdtDecimal
        return {
            price: token0.toLowerCase() == pairInfo.usdt.toLowerCase()
                ? _reserve0 * Math.pow(10, decimalDiff) / _reserve1
                : _reserve1 * Math.pow(10, decimalDiff) / _reserve0,
            weight: pairInfo.weight
        }
    },
    getPriceFromApi: async function (apiInfo) {
        return {
            price: await axios({
                method: 'get',
                url: apiInfo.url,
                timeout: 10000
            }).then(response => response.data[0].current_price)
                .catch(err => console.log(`err:${err}`)),
            weight: apiInfo.weight
        }
    }
};