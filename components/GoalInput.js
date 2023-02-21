import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Modal,
  Text,
  Image,
  Button,
  KeyboardAvoidingView,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <KeyboardAvoidingView style={styles.inputContainer} behavior="padding">
        <Text style={styles.text}>Do It For Her</Text>
        <Image
          source={require("../assets/images/moony-support.jpg")}
          style={styles.image}
        />

        <TextInput
          placeholder="Enter your goal here"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={props.closeModal}
            style={[styles.button, { backgroundColor: "#bdb7b7" }]}
          >
            <Text>Cancel</Text>
          </Pressable>

          <Pressable onPress={addGoalHandler} style={styles.button}>
            <Text>Add Goal</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#f0cccc",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textInput: {
    width: "80%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    width: 125,
    height: 40,
    margin: 8,
    padding: 8,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
