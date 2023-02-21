import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function GoalItem(props) {
  const [completed, setCompleted] = useState(false);

  function onCheckmarkHandler() {
    if (!completed) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }
  return (
    <View style={styles.goalContainer}>
      <View style={styles.goalItemContainer}>
        <Pressable onPress={onCheckmarkHandler}>
          {completed ? (
            <Image
              source={require("../assets/images/checkmark.png")}
              style={styles.checkImage}
            />
          ) : (
            <Image
              source={require("../assets/images/open-circle.png")}
              style={styles.checkImage}
            />
          )}
        </Pressable>

        <Text style={styles.goalItem}>{props.text}</Text>

        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
          <Image
            source={require("../assets/images/trash.png")}
            style={styles.trashImage}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  goalItemContainer: {
    flexDirection: "row",
  },
  goalItem: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "white",
    width: "75%",
  },
  checkImage: {
    width: 40,
    height: 40,
    margin: 5,
    marginLeft: 0,
  },
  trashImage: {
    width: 40,
    height: 40,
    margin: 5,
  },
});
