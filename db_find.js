export function findUser(db, UserInpt) {
    db.loadDatabase(function (err) {   
      db.find({"Username": UserInpt}, function(err, docs){
        return docs
      })
    });
}