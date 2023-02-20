import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
      setEnteredGoalText(enteredText);
    }
  
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput placeholder='Enter your goal here'
            style={styles.textInput} 
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Cancel' onPress={props.closeModal}/>
            </View>
            <View style={styles.button}>
              <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
          </View>
        </View>

      </Modal>
        
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        padding: 8
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: "center"
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }
});