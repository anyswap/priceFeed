const Ethers = require("ethers")
const ABI_PAIR = require("../abis/pair.json").abi;
const ABI_PRICEORACLE = require("../abis/priceOracle.json").abi;
const Config = require("../config/config");
const Networks = require("../config/networks");

let providers = {};
let priceOracleContract;
module.exports = {
    getProvider: function (network) {
        if (providers[network] != undefined) {
            return providers[network]
        }
        providers[network] = new Ethers.providers.getDefaultProvider(network)
        return providers[network];
    },
    getWallet: function () {
        return new Ethers.Wallet(Config.privateKey, this.getProvider(Networks.testnet));
    },
    instancePairContracts: function (address, network) {
        return new Ethers.Contract(address, ABI_PAIR, this.getProvider(network))
    },
    instancePairContracts2: function (isUniSwap, chainId) {
        return isUniSwap
            ? new Ethers.Contract(Config.uniswapPairs[chainId], ABI_PAIR, this.getProvider(true))
            : new Ethers.Contract(Config.sushiswapPairs[chainId], ABI_PAIR, this.getProvider(true))
    },
    instancePriceOracleContracts: function () {
        if (priceOracleContract != undefined) {
            return priceOracleContract
        }
        return new Ethers.Contract(Config.priceOracle, ABI_PRICEORACLE, this.getWallet())
    }
};