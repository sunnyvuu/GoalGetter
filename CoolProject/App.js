import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function addGoalHandler(enteredGoalText) {
      setGoals((currentGoals) => [
      ...currentGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
      ]);
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'pink'} onPress={startAddGoalHandler} />
      {modalIsVisible && <GoalInput 
        onAddGoal={addGoalHandler} 
      />}
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goals} 
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>;
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
  },
  goalsContainer: {
    flex: 5
  }
});
