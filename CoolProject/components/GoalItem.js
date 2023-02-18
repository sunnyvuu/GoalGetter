import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalContainer}>
            <View style= {styles.goalItemContainer}>
                <Text style={styles.goalItem}>{props.text}</Text>
            </View>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
                <View style={styles.CustomButton}>
                    <Text>Completed!</Text>
                </View>
            </Pressable>
        </View>
        
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalContainer: {
      flexDirection: "row",  
      alignContent: "space-between",
    },
    goalItemContainer: {
        flexShrink: 1,
        flexBasis: "auto",
        flexGrow: 1,
    },
    goalItem: {
        marginTop: 8,
        marginBottom: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#f0dadb"
      },
      CustomButton: {
        flexShrink: 0,
        flexBasis: "auto",
        flexGrow: 0,
        backgroundColor: "pink",
        margin: 8,
        padding: 8,
        borderRadius: 6,
      }
});