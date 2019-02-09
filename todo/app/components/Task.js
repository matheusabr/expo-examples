import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Task extends Component {
  render() {
    return (
      <View key={this.props.keyVal} style={styles.task}>
        <Text style={styles.taskText}>{this.props.val.date}</Text>
        <Text style={styles.taskText}>{this.props.val.task}</Text>

        <TouchableOpacity
          onPress={this.props.handleDelete}
          style={styles.taskDelete}
        >
          <Text style={styles.taskDeleteText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  taskText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#e91e63"
  },
  taskDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  taskDeleteText: {
    color: "#fff"
  }
});
