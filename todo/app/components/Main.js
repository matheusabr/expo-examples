import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";

import Task from "./Task";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: ""
    };
  }
  render() {
    let tasks = this.state.tasks.map((val, key) => {
      return (
        <Task
          key={key}
          keyVal={key}
          val={val}
          handleDelete={() => this.handleDelete(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TO DO</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{tasks}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={task => this.setState({ task })}
            value={this.state.task}
            placeholder="New task..."
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.handleAddTask.bind(this)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  handleAddTask() {
    if (this.state.task) {
      const d = new Date();
      const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      const tasks = [...this.state.tasks];
      tasks.push({ date, task: this.state.task });
      this.setState({
        tasks,
        task: ""
      });
    }
  }

  handleDelete(key) {
    const tasks = [...this.state.tasks];
    tasks.splice(key, 1);
    this.setState({ tasks });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#64C879",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#55AA69"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
    fontWeight: "600"
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#499D87",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 10,
    bottom: 70,
    backgroundColor: "#E1B043",
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});
