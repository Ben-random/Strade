import { User } from "parse/lib/browser/Parse";
//this function tries to find User in database with same username, if none exists, then an empty string is returned
//and a new user object is created 
const AddUser = async function (Username) {
    // Creates a new Todo parse object instance
    let User = new Parse.Object('User');
    User.set('Username', Username);
    // After setting the todo values, save it on the server
    try {
      await person.save();
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    };
  };
  const findUser = async function (Username) {
    const parseQuery = new Parse.Query('User');
    try {
      let User = await parseQuery.find();
      const result =  User;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    };
    if(User == []){
        AddUser(Username)
        return []
    } else {
        return User.StocksOwned
    }
  };

 findUser(Username)