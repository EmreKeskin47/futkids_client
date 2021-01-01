import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./screens/HomePage";
import AdminPage from "./screens/AdminPage";
import PlayerDetailsPage from "./screens/PlayerDetailsPage";
import { DrawerNavigation } from "./navigation/AppNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
    return <DrawerNavigation />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
