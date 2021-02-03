import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import PlayerList from "../components/PlayerList";

const UserPage = (props) => {
    const navigateToProfile = (id) => {
        props.navigation.navigate("Profile Page", { id: id });
    };
    return (
        <View style={styles.root}>
            <PlayerList navigate={navigateToProfile} />
        </View>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "User PlayerList Page",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={
                        Platform.OS === "android" ? "md-menu" : "ios-menu"
                    }
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
export default UserPage;
