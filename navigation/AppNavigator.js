import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MenuNavigator } from "./MenuNavigator";
import { useDispatch } from "react-redux";
import * as playerCardActions from "../redux/actions/playerCard-action";

const AppNavigator = (props) => {
  const dispatch = useDispatch();
  dispatch(playerCardActions.fetchPlayerCards());

  return (
    <NavigationContainer>
      <MenuNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
