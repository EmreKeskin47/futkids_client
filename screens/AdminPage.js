import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdminPage = (props) => {
    return (
        <View style={styles.text}>
            <Text>Admin Page</Text>
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
export default AdminPage;
