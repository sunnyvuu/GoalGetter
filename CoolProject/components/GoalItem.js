import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View>
                <Text style={styles.goalItem}>{props.text}</Text>
            </View>
        </Pressable>
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