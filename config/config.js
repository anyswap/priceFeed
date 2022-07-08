const Networks = require("./networks")
module.exports = {
    allChain: [4],
    priceOracle: "0x388f62635e5135471d12Be7080a3E65f6174e1E7",
    privateKey: "",
    chains: {
        "4": {
            V2Pairs: [
                { pairAddr: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7", usdtDecimal: 6, weight: 100 },
                { pairAddr: "0x06da0fd433C1A5d7a4faa01111c044910A184553", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7", usdtDecimal: 6, weight: 100 },
                { pairAddr: "0x531FEbfeb9a61D948c384ACFBe6dCc51057AEa7e", network: Networks.mainnet["97"], usdt: "0x55d398326f99059fF775485246999027B3197955", usdtDecimal: 18, weight: 100 }
            ],
            Apis: [
                {
                    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum",
                    weight: 100
                }
            ],
            decimal: 18,
        },
        "97": {
            V2Pairs: [
                { pairAddr: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE", network: Networks.mainnet["97"], usdt: "0x55d398326f99059fF775485246999027B3197955", usdtDecimal: 18, weight: 100 },
            ],
            Apis: [
                {
                    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin",
                    weight: 100
                }
            ],
            decimal: 18,
        }
    }
}