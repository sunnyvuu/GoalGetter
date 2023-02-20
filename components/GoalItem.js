import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function GoalItem(props) {
    
    return (
        <View style={styles.goalContainer}>
            <View style= {styles.goalItemContainer}>
                <Text style={styles.goalItem}>{props.text}</Text>
                <Pressable onPress={props.addCompleteGoal}>
                    <Image source={require('../assets/images/checkmark.png')} style={styles.image} />
                </Pressable>
                <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
                    <Image source={require('../assets/images/trash.png')} style={styles.image} />
                </Pressable>

            </View>
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
        flexDirection: "row",
    },
    goalItem: {
        marginTop: 8,
        marginBottom: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "white",
        width: "71%"
    },
    image: {
        width: 40,
        height: 40,
        margin: 5,
    }
});