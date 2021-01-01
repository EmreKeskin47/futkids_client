import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomePage = (props) => {
    return (
        <View style={styles.text}>
            <Text>Home Page </Text>
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
export default HomePage;
