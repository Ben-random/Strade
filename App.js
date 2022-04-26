import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, Alert, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Divider, useTheme } from 'react-native-elements';
import { StockPrices } from './StockPricesScheduler';
import { findUser } from "./ProcessUser";
import { update } from "./Update_db";
import { db } from "./db_config";
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
    let User = findUser(db, UsrInput)
    console.log("User has been found or created: User is", User)
    console.log("User has been found or created: UsrInput", UsrInput)
    navigation.navigate("Stocks", { User: User })
    console.log("Open Stock screen and passes in User:", User)
  };
  return(
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={() => console.log("Image Pressed")}>
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
  User = route.params.User
  const Update_db = (buyOrSell, db, User) => {
    if (buyOrSell == "Buy") {
      User.buy("Meta", StockPrices[0])
      update(db, User)
    } else {
      User.sell("Meta", StockPrices[0])
      update(db, User)
    }
  }
  const toStocksOwned = (User) => {
    navigation.navigate("StocksOwnedScreen", { StocksOwned: User.StocksOwned })
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
        <button title='Buy' onPress={() => Update_db("Buy", db, User)}/>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "AMZN">
        <Text style={StockStyles.text}>Amazon<Text style={StockStyles.Tickers}>(AMZN)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[1]}</Text>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "GOOG">
        <Text style={StockStyles.text}>Aphabet<Text style={StockStyles.Tickers}>(GOOG)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[2]}</Text>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "NFLX">
        <Text style={StockStyles.text}>Netflix<Text style={StockStyles.Tickers}>(NFLX)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[3]}</Text>
      </SafeAreaView>
      </TouchableHighlight>
      <Divider/>
      <button title='Stocks Owned' onPress={() => toStocksOwned(User)}/>
      </ScrollView>
    </SafeAreaView>
  
  );
};
const StocksOwnedScreen = ({navigation, route}) => {
  const StocksOwned = params.route.StocksOwned 
  return (
    <SafeAreaView style = {AltStyle.container}>
    <Divider>
    <text>{ StocksOwned[0] }</text>
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