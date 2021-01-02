import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MenuNavigator } from "./MenuNavigator";

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <MenuNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
