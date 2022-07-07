const Networks = require("./networks")
module.exports = {
    allChain: [4, 97],
    priceOracle: "0xFE8D033fEB3005741F9Ae7A0c1F9EeBca44Ef17f",
    privateKey: "",
    usdtDecimals: {
        "4": 6,
        "97": 18
    },
    chains: {
        "4": {
            V2Pairs: [
                { pairAddr: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
                { pairAddr: "0x06da0fd433C1A5d7a4faa01111c044910A184553", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
                { pairAddr: "0x531FEbfeb9a61D948c384ACFBe6dCc51057AEa7e", network: Networks.mainnet["97"], usdt: "0x55d398326f99059fF775485246999027B3197955" }
            ],
            Apis: [
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
            ],
            decimal: 18,
        },
        "97": {
            V2Pairs: [
                { pairAddr: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE", network: Networks.mainnet["97"], usdt: "0x55d398326f99059fF775485246999027B3197955" },
            ],
            Apis: [
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin"
            ],
            decimal: 18,
        }
    }
}