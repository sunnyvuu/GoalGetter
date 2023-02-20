import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Pressable, Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState(goals);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function closeAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
      setGoals((currentGoals) => [
      ...currentGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
      ]);
      closeAddGoalHandler();
  } 

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  } 

  function addCompletedGoalHandler(id) {
    setCompletedGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id == id);
    });
    console.log(completedGoals);
  } 

  return (
    <View style={styles.appContainer}>
      <GoalInput 
        onAddGoal={addGoalHandler}
        visible={modalIsVisible} 
        closeModal={closeAddGoalHandler}
      />
      <View style={styles.addGoalContainer}>
        <Pressable>
          <View style={styles.addGoalButton}>
            <Text onPress={startAddGoalHandler}>Add New Goal</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.goalsContainer} >
        <FlatList 
          data={goals} 
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} addCompleteGoal={addCompletedGoalHandler}/>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "pink",
  },
  goalsContainer: {
    flex: 5
  },
  addGoalContainer: {
    alignItems: 'center',
    justifyContent: "center",
  }, 
  addGoalButton: {
    backgroundColor: "white",
    width: 200,
    height: 50,
    margin: 8,
    padding: 8,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: "center",
  }
});
