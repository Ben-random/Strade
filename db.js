const { async } = require('parse/lib/browser/Storage');

const AsyncStorage = require('react-native').AsyncStorage;
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('YlzHOORuV1iQ8TqAw9ekVRarosVljhjKq6DLfYtW','SEZbMk1AI9G7ERbubkpkI8xvX7QceQizH52FXezh');
Parse.serverURL = 'https://parseapi.back4app.com/';

const AddPerson = async function () {
  // Creates a new Todo parse object instance
  let person = new Parse.Object('person');
  person.set('name', "Mr Brant");
  person.set("email", "mb@school.com")
  // After setting the todo values, save it on the server
  try {
    await person.save();
  } catch (error) {
    // Error can be caused by lack of Internet connection
    Alert.alert('Error!', error.message);
    return false;
  };
};
const readPerson = async function () {
  const parseQuery = new Parse.Query('person');
  try {
    let person = await parseQuery.find();
    return person;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    Alert.alert('Error!', error.message);
    return false;
  };
};
AddPerson();
console.log(readPerson());