import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import AdminPage, {
    screenOptions as AdminScreenOptions,
} from "../screens/AdminPage";
import HomePage, {
    screenOptions as HomeScreenOptions,
} from "../screens/HomePage";
import PlayerDetailsPage, {
    screenOptions as PlayerDetailScreenOptions,
} from "../screens/PlayerDetailsPage";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
        fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
        fontFamily: "open-sans",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const PlayersStackNavigator = createStackNavigator();

export const PlayersAdminNavigator = () => {
    return (
        <PlayersStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <PlayersStackNavigator.Screen
                name="Admin Page"
                component={AdminPage}
                options={AdminScreenOptions}
            />
            <PlayersStackNavigator.Screen
                name="Player Details"
                component={PlayerDetailsPage}
                options={PlayerDetailScreenOptions}
            />
        </PlayersStackNavigator.Navigator>
    );
};

const HomeStackNavigator = createStackNavigator();

export const HomePageNavigator = () => {
    return (
        <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <HomeStackNavigator.Screen
                name="Home"
                component={HomePage}
                options={HomeScreenOptions}
            />
        </HomeStackNavigator.Navigator>
    );
};

const MenuDrawerNavigator = createDrawerNavigator();

export const MenuNavigator = () => {
    return (
        <MenuDrawerNavigator.Navigator screenOptions={defaultNavOptions}>
            <MenuDrawerNavigator.Screen
                name="Home"
                component={HomePageNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Admin Page"
                component={PlayersAdminNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="PlayerDetails"
                component={PlayerDetailsPage}
            />
        </MenuDrawerNavigator.Navigator>
    );
};
