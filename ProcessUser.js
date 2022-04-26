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

export function findUser(db, Username) {
  db.loadDatabase(function (err) {   
    console.log("executed load db")
    db.find({"Username": Username}, function(err, docs){
      console.log("Looking to see if User exists ")
      if(docs[0] != null) {
        console.log("Username has been found")
        const User = docs[0]
        console.log("User is: ", User['Username'])
        return User
      } else {
        console.log("User not found - Creating new User")
        const User = new User()
        User['Username'] = Username
        db.insert(User, function(err, newUser){})
        console.log("db: ", db)
        return User
      }
    })
  });

}

