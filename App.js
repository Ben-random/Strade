import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, Alert, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
      <SafeAreaView>
      <Text style={styles.title}>
        <Text>Hi {route.params.Username}!</Text>
      </Text>
      </SafeAreaView>
      <SafeAreaView>
        <Text>Meta</Text>
      </SafeAreaView>
      <SafeAreaView>
        <Text>Amazon</Text>
      </SafeAreaView>
      <SafeAreaView>
        <Text>Aphabet</Text>
      </SafeAreaView>
      <SafeAreaView>
        <Text>Netflix</Text>
      </SafeAreaView>
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
    fontSize: 24
  }
});

const AltStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: "center"
  }
});