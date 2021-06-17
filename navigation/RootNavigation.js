import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MenuNavigator, SwitchNavigator } from "./MenuNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/auth/LoginPage";
import SignUp from "../screens/auth/SignUpPage";
import ForgotPassword from "../screens/auth/ForgotPassword";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const RootNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"SignUp"} component={SignUp} />
        <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} />
        <Stack.Screen name={"Futkids"} component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
