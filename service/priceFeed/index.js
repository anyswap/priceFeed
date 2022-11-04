const schedule = require('node-schedule');
const GetPrices = require('./getPrices');
const CalcPrice = require('./calcPrice');
const UpdatePrice = require('./updatePrice');
const Config = require('../../config/config')
async function priceFeedJob() {
    // Scan every ten seconds
    schedule.scheduleJob('0 */2 * * * *', async () => {
        try {
            Config.allChain.map(chainId => priceFeed(chainId))
        } catch (error) {
            console.log('%s error:%s', new Date(), error)
        }
    });
}

async function priceFeed(chainId) {
    // get prices
    const prices = await GetPrices.getPrices(chainId);
    // calc new price
    const newPrice = CalcPrice.calcNewPrice(prices);
    if (newPrice > 0) {
        // get price and time from contract
        const { price, lastUpdateTime } = await GetPrices.getPriceAndTimeFromContract(chainId);
        // compares price threshold or time boundary
        const updateFlag = CalcPrice.cmpPriceAndTime(price, lastUpdateTime, newPrice);
        // update price or not
        if (updateFlag) {
            setTimeout(() => {
                UpdatePrice.updatePrice(chainId, newPrice)
            }, 3000);
        }
    }
}

priceFeedJob();