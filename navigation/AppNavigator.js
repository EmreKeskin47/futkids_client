import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MenuNavigatorAdmin } from "./MenuNavigator";
import { MenuNavigatorUser } from "./MenuNavigator";
import { useDispatch } from "react-redux";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";
import * as playerStatisticsActions from "../redux/actions/playerStatistics-action";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";

const Stack = createStackNavigator();
const AppNavigator = (props) => {
  const dispatch = useDispatch();
  dispatch(playerCardActions.fetchPlayerCards());
  dispatch(playerAttributeActions.getAllAttributes());
  dispatch(playerStatisticsActions.fetchPlayerStatistics());

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {firebase.auth().currentUser.email == "ardayuvarlak@gmail.com" ? (
          <Stack.Screen name={"FutkidsAdmin"} component={MenuNavigatorAdmin} />
        ) : (
          <Stack.Screen name={"Futkids"} component={MenuNavigatorUser} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
