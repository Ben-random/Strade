import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, Alert, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Divider, useTheme } from 'react-native-elements';
import { StockPrices } from './StockPricesScheduler';
import { findUser } from "./ProcessUser";
import { update } from "./Update_db";
import { db } from "./db_config";
import { UserObj } from './harcoded_user';
import User from './User_class';
//import { formatStocks } from './FormatStocksOwned';
const Stack = createNativeStackNavigator();

export default function App() {
  console.log("Application started")
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Stocks' component={StocksScreen}/>
        <Stack.Screen name="Stocks Owned" component={StocksOwnedScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({ navigation }) => {
  console.log("Display home page")
  const toStocks = (UsrInput) => {
    console.log("Login Screen")
    //let User = findUser(db, UsrInput)
    console.log("User has been found or created: UsrInput", UsrInput)
    console.log("User has been assigned: User is", UserObj)
    navigation.navigate("Stocks", { UserObj: UserObj })
    console.log("Open Stock screen and passes in User:", UserObj)
  };
  return(
    <SafeAreaView style={styles.container}>
      <TouchableHighlight>
      <Image source={{
        width: 100,
        height: 100,
        uri: "https://www.pngkit.com/png/detail/124-1246922_stripe-logo-stripe-png-logo.png"}}/>
      </TouchableHighlight>
      <Text numberOfLines={1}>
        Welcome to Strade -  the risk free stock market simulator
      </Text>
      <Button title='Log in' onPress={() => Alert.prompt("Log in", "Username", (UsrInput) => toStocks(UsrInput))}/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
};
const StocksScreen = ({ navigation, route }) => {
  console.log("into Stocks screen")
  let User = route.params.UserObj
  function BuyStock_db(Tckr, db, User, Price){
    User.Buy(Tckr, Price)
  }
  function SellStock_db(Tckr, db, User, Price){
    User.sell(Price)
  }
  const toStocksOwned = (User) => {
    navigation.navigate("Stocks Owned", { StocksOwned: User.StocksOwned })
  }
  return (
    <SafeAreaView style={AltStyle.container}>
      <SafeAreaView style={StockStyles.dividers}>
      <Text style={StockStyles.SubHeading}>
      <Text>Hi {User["Username"]}!</Text>
      </Text>
      </SafeAreaView>
      <Divider/>
      <ScrollView>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "FB">
        <Text style={StockStyles.text}>Meta<Text style={StockStyles.Tickers}>(FB)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[0]}</Text>
        <Button title='Buy' onPress={() => BuyStock_db("Meta", db, User, StockPrices[0])}/>
        <Button title='Sell' onPress={() => SellStock_db("Meta", db, User, StockPrices[0])}/>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "AMZN">
        <Text style={StockStyles.text}>Amazon<Text style={StockStyles.Tickers}>(AMZN)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[1]}</Text>
        <Button title='Buy' onPress={() => BuyStock_db("Amazon", db, User, StockPrices[1])}/>
        <Button title='Sell' onPress={() => SellStock_db("Amazon", db, User, StockPrices[1])}/>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "GOOG">
        <Text style={StockStyles.text}>Aphabet<Text style={StockStyles.Tickers}>(GOOG)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[2]}</Text>
        <Button title='Buy' onPress={() => BuyStock_db("Google", db, User, StockPrices[2])}/>
        <Button title='Sell' onPress={() => SellStock_db("Google", db, User, StockPrices[2])}/>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "NFLX">
        <Text style={StockStyles.text}>Netflix<Text style={StockStyles.Tickers}>(NFLX)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[3]}</Text>
        <Button title='Buy' onPress={() => BuyStock_db("Netflix", db, User, StockPrices[3])}/>
        <Button title='Sell' onPress={() => SellStock_db("Netflix", db, User, StockPrices[3])}/>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <Button title='Stocks Owned' onPress={() => toStocksOwned(User)}/>
      </ScrollView>
    </SafeAreaView>
  
  );
};
const StocksOwnedScreen = ({navigation, route}) => {
  const StocksOwned = route.params.StocksOwned 
  return (
    <SafeAreaView style = {AltStyle.container}>
    <Divider>
    <Text style = {StockStyles.text}>Stocks Owned</Text>
    <Text>{ StocksOwned }</Text>
    </Divider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    alignItems: "center"
  }
});

const AltStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
});

const StockStyles = StyleSheet.create({
  SubHeading: {
    fontSize: 24,
    textAlign : "center",
    paddingVertical : 8,
    marginBottom : 8
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  dividers: {
    marginBottom: 10,
  },
  Tickers: {
    fontSize: 14
  }
})