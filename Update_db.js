export function update(db, User) {
    db.update({"User.Username": User.Username}, {$set: {"User.StocksOwned": User.StocksOwned}}, function(err){
        
    })
    db.update({"User.Username": User.Username}, {$set: {"User.capital": User.capital}}, function(err){

    })
}   