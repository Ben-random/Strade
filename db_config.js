import AsyncStorage from '@react-native-async-storage/async-storage';
import Datastore from 'react-native-local-mongodb';

const db = new Datastore({
  filename: 'asyncStorageKey',
  storage: AsyncStorage
})
//console.log("excuted create db")
;
//console.log("db: ", db)
/* db.loadDatabase(function (err) {
  user = {
    Username: "Ben"
  }
  db.insert(user, function (err, newUser) {  
  });
  console.log("db", db)
}) */
export { db }


