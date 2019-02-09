import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <Text>Opennnn up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc9900",
    alignItems: "center",
    justifyContent: "center"
  }
});
