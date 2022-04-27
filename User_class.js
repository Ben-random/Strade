class User {
    constructor (Username) {
      this.Username = Username;
      this.StocksOwned = [];
      this.capital = 10000
    }
    Buy(Stock, Price) {
      this.StocksOwned.push(Stock)
      this.capital = this.capital - Price
    }
    Sell(Price) {
      this.StocksOwned.pop()
      this.capital = this.capital + Price
    }
    SetCapital(NewCapital) {
      this.capital = NewCapital
    }
    SetStocksOwned(NewStocksOwned) {
      this.StocksOwned = NewStocksOwned
    }
  }