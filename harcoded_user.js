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
    Sell(Stock, Price) {
      this.StocksOwned = this.StocksOwned.filter(function(f) { return f !== Stock })
      this.capital = this.capital + Price
    }
    setCapital(NewCapital) {
      this.capital = NewCapital
    }
    setStocksOwned(NewStocksOwned) {
      this.StocksOwned = NewStocksOwned
    }
  }

let UserObj = new User("Ben")
export { UserObj }