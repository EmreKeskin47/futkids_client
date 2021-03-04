import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
    return (
        <View style={styles.root}>
            <AuthForm />
        </View>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "Login Page",
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
export default LoginPage;
