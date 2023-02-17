import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
        <View>
            <Text style={styles.goalItem}>{props.text}</Text>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#f0dadb"
      }
});