import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, Alert, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Divider, useTheme } from 'react-native-elements';
import { StockPrices } from './StockPricesScheduler';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

////////////////////////////////////////// Testing the backend ////////////////////////////////

const App = () => {
  const [person, setPerson] = useState(new Parse.Object('Person'));

  //Initializing the SDK. 
  Parse.setAsyncStorage(AsyncStorage);
  //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
  Parse.initialize('YlzHOORuV1iQ8TqAw9ekVRarosVljhjKq6DLfYtW','SEZbMk1AI9G7ERbubkpkI8xvX7QceQizH52FXezh');
  Parse.serverURL = 'https://parseapi.back4app.com/';

  //This funciton will save a simple Person object
  async function addPerson() {
    try {
      //create a new Parse Object instance
      const newPerson = new Parse.Object('Person');
      //define the attributes you want for your Object
      newPerson.set('name', 'John');
      newPerson.set('email', 'john@back4app.com');
      //save it on Back4App Data Store
      await newPerson.save();
    } catch (error) {
      console.log('Error saving new person: ', error);
    }
  }

  //This function will retrieve a Person which the name is John
    async function fetchPerson() {
      //create your Parse Query using the Person Class you've created
      let query = new Parse.Query('Person');
      //run the query to retrieve all objects on Person class, optionally you can add your filters
      let queryResult = await query.findAll();
      //pick the first result 
      const currentPerson = queryResult[0];
      //access the Parse Object attributes
      console.log('person id: ', currentPerson.get('id'));
      console.log('person name: ', currentPerson.get('name'));
      console.log('person email: ', currentPerson.get('email'));
      setPerson(currentPerson);
    }

    useEffect(() => {
      fetchPerson()
    }, []);
  
    return (
      <SafeAreaView>
        <View>
          <Text>Name: {person.get('name')}</Text>
          <Text>email: {person.get('email')}</Text>
          <Button title='Add person' onPress={addPerson} />
          <Button title='Fetch person' onPress={fetchPerson} />
          {/* Your other components here ....*/}
        </View>
      </SafeAreaView>
    )
  
  }
  
export default function App();

////////////////////////////////////////// Testing the backend ////////////////////////////////

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
const StcoksOwned = ({navigation, route}) => {
  return (
    <SafeAreaView style = {AltStyle.container}>
    
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
