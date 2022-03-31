import { Touchable } from "react-native";

class User {
    constructor (Username) {
        this.Username = Username
    }
    constructor () {
        this.StocksOwned = []
    }
}
//if user with username already in users table, load return owned stocks, else create new user obj.
function ProcessUser(Username) {
    User = new User
    User.Username = Username
    return User.StocksOwned
}