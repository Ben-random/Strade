import User from "./UserClass"

export const findUser = (db, UserInpt) => {
  db.loadDatabase(function (err) {   
    db.find({"Username": UserInpt}, function(err, docs){
      let db_res = []   //array to store database results
      if(docs[0] != null) {
        let _User = docs[0]
        db_res.push(_User)
      } else {
        let UserObj = new User(UserInpt)
        db.insert(UserObj, function(err, newUser){})
        db_res.push(UserObj)
      }
      return db_res[0]
    })
  });
}
