import { StockCandles } from "finnhub"

export function formatStocks(StocksOwned) {
    if (StocksOwned == []) {
        return StocksOwned
    } else {
        let res = []
        for (i=0; i < StockCandles.length; i++) {
            res.push(" " + StocksOwned[i] + " ")
        }
        return res
    }
}