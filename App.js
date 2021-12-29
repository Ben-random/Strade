import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, Alert, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text clicked");
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={() => console.log("Image Pressed")}>
      <Image source={{
        width: 100,
        height: 100,
        uri: "https://www.pngkit.com/png/detail/124-1246922_stripe-logo-stripe-png-logo.png"}}/>
      </TouchableHighlight>
      <Text numberOfLines={1} onPress={handlePress}>
        Welcome to Strade -  the risk free stcok market simulator
      </Text>
      <Button title='Log in' onPress={() => Alert.alert("Log in", "Are you sure you want to log in?", [
        {text: "Yes", onPress: () => console.log("Clicked Yes")}, 
        {text: "No", onPress: () => console.log("Clicked No")}
        ])}/>
      <Button title='Sign Up' onPress={() => Alert.prompt("Sign up", "Email", (text) => console.log(text))}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: "center",
    alignItems: "center"
  },
});
