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
    sell(Stock, Price) {
      this.StocksOwned.pop(Stock)
      this.capital = this.capital + Price
    }
    setCapital(NewCapital) {
      this.capital = NewCapital
    }
    setStocksOwned(NewStocksOwned) {
      this.StocksOwned = NewStocksOwned
    }
  }