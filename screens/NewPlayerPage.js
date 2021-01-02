import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewPlayerPage = (props) => {
    return (
        <View style={styles.text}>
            <Text>New Player Page </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default NewPlayerPage;
