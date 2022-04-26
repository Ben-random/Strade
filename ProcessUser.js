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

export function findUser(db, Userinpt) {
  db.loadDatabase(function (err) {   
    console.log("executed load db")
    db.find({"Username": Userinpt}, function(err, docs){
      console.log("Looking to see if User exists ")
      if(docs[0] != null) {
        console.log("Username has been found")
        let _User = docs[0]
        console.log("User is: ", _User['Username'])
        return _User
      } else {
        console.log("User not found - Creating new User")
        let User = new User()
        User['Username'] = Userinpt
        db.insert(User, function(err, newUser){})
        console.log("db: ", db)
        return User
      }
    })
  });

}

