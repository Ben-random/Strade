import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, View, SafeAreaView } from 'react-native';

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
