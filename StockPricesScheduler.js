import { $ } from "jquery"

$.ajax({
    url: "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=FB%2C%20AMZN%2C%20GOOG%2C%20NFLX",
    beforeSend: function(xhr) {
        xhr.setRequestHeader("'X-API-KEY", "dLcdplO5qt8urK9hfdFce4RIHd7qNqqi2HFYRIIa")
    },
    method: {
        method: "POST"
    },
    accept: {
        accept: "application/json"
    },
    success: function(data) {
        const Prices = []
        result = { data }.result
        for (let i = 0; i < 4; i++) {
            Price = result[i].bid
            Prices.push(Price)
        }
        return Prices
    }
})
const StockPrices = Prices
export { StockPrices }