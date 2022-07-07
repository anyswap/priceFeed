const Networks = require("./networks")
module.exports = {
    priceOracle: "0xFE8D033fEB3005741F9Ae7A0c1F9EeBca44Ef17f",
    privateKey: "",
    usdt: {
        decimal: 6
    },
    chains: {
        "4": {
            V2Pairs: [
                { pairAddr: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
                { pairAddr: "0x06da0fd433C1A5d7a4faa01111c044910A184553", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7" }
            ],
            Apis: [
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
            ],
            decimal: 18,
        },
        "97": {
            V2Pairs: [
                { pairAddr: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
                { pairAddr: "0x06da0fd433C1A5d7a4faa01111c044910A184553", network: Networks.mainnet["4"], usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7" }
            ],
            Apis: [
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin"
            ],
            decimal: 18,
        }
    }
}