import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlayerDetailsPage = (props) => {
    return (
        <View style={styles.text}>
            <Text>Player Details Screen</Text>
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
export default PlayerDetailsPage;
