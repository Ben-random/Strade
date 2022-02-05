import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, Alert, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Divider, useTheme } from 'react-native-elements';
import { StockPrices } from './StockPricesScheduler';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("Application started")
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Stocks' component={StocksScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({ navigation }) => {
  const toStocks = (UsrInput) => {
    navigation.navigate("Stocks", { Username: UsrInput })
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
  return (
    <SafeAreaView style={AltStyle.container}>
      <SafeAreaView style={StockStyles.dividers}>
      <Text style={StockStyles.SubHeading}>
        <Text>Hi {route.params.Username}!</Text>
      </Text>
      </SafeAreaView>
      <Divider/>
      <ScrollView>
      <TouchableHighlight>
      <SafeAreaView style={StockStyles.dividers} id = "FB">
        <Text style={StockStyles.text}>Meta<Text style={StockStyles.Tickers}>(FB)</Text></Text>
        <Text style={StockStyles.text}>£{StockPrices[0]}</Text>
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
      </ScrollView>
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