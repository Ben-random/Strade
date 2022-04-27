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

export const findUser = (db, UserInpt) => {
  db.loadDatabase(function (err) {   
    console.log("executed load db")
    db.find({"Username": UserInpt}, function(err, docs){
      let db_res = []   //array to store database results
      console.log("Looking to see if User exists ")
      if(docs[0] != null) {
        console.log("Username has been found")
        let _User = docs[0]
        console.log("User is: ", _User['Username'])
        console.log("Db_res is: ",db_res)
        db_res.push(_User)
        console.log("Dthis is des[0]: ",db_res[0])
      } else {
        console.log("User not found - Creating new User")
        let UserObj = new User(UserInpt)
        console.log("User: ", UserObj)
        db.insert(UserObj, function(err, newUser){})
        db_res.push(UserObj)
      }
      return db_res[0]
    })
  });
}
