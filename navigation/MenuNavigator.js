import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import AdminPage, {
    screenOptions as AdminScreenOptions,
} from "../screens/admin/AdminPage";
import HomePage, {
    screenOptions as HomeScreenOptions,
} from "../screens/HomePage";
import PlayerDetailsPage, {
    screenOptions as PlayerDetailScreenOptions,
} from "../screens/admin/PlayerDetailsPage";
import NewPlayerPage from "../screens/admin/NewPlayerPage";
import StadiumTest, {
    screenOptions as StadiumTestScreenOptions,
} from "../screens/StadiumTest";
import UserPage, {
    screenOptions as UserScreenOptions,
} from "../screens/user/UserPage";
import PlayerProfilePage from "../screens/user/PlayerProfile";
import VotePage from "../screens/user/VotePage";
import LoginPage, {
    screenOptions as LoginScreenOptions,
} from "../screens/LoginPage";

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

const AdminStackNavigator = createStackNavigator();
export const PlayersAdminNavigator = () => {
    return (
        <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AdminStackNavigator.Screen
                name="Admin Page"
                component={AdminPage}
                options={AdminScreenOptions}
            />
            <AdminStackNavigator.Screen
                name="Player Details"
                component={PlayerDetailsPage}
            />
            <AdminStackNavigator.Screen
                name="New Player"
                component={NewPlayerPage}
            />
        </AdminStackNavigator.Navigator>
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

const UserStackNavigator = createStackNavigator();
export const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <UserStackNavigator.Screen
                name="User Player List"
                component={UserPage}
                options={UserScreenOptions}
            />
            <UserStackNavigator.Screen
                name="Player Profile"
                component={PlayerProfilePage}
            />
        </UserStackNavigator.Navigator>
    );
};

const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AuthStackNavigator.Screen
                name="Login Page"
                component={LoginPage}
                options={LoginScreenOptions}
            />
        </AuthStackNavigator.Navigator>
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
                name="User Page"
                component={UserNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Login Page"
                component={AuthNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="LineUp Test"
                component={StadiumTest}
                screenOptions={StadiumTestScreenOptions}
            />
            <MenuDrawerNavigator.Screen name="Vote Page" component={VotePage} />
        </MenuDrawerNavigator.Navigator>
    );
};
