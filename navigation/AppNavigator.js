import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../screens/HomePage";
import AdminPage from "../screens/AdminPage";
import PlayerDetailsPage from "../screens/PlayerDetailsPage";

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="Admin" component={AdminPage} />
                <Drawer.Screen
                    name="Player Details"
                    component={PlayerDetailsPage}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
