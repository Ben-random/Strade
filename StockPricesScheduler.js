const finnhub = require('finnhub');

const Prices = []
const Stocks = ["FB", "AMZN", "GOOG", "NFLX"]

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c3slhlqad3ide69e45dg"
const finnhubClient = new finnhub.DefaultApi()
for (let i = 0; i < Stocks.length; i++) {
    const Stock = Stocks[i];
    finnhubClient.quote(Stock, (error, data, response) => {
        Prices.push(data.c)
      });
}
const StockPrices = Prices
export { StockPrices }