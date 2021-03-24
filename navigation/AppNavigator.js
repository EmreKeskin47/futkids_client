import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MenuNavigator } from "./MenuNavigator";
import { useDispatch } from "react-redux";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";
import * as playerStatisticsActions from "../redux/actions/playerStatistics-action";

const AppNavigator = (props) => {
    const dispatch = useDispatch();
    dispatch(playerCardActions.fetchPlayerCards());
    dispatch(playerAttributeActions.getAllAttributes());
    dispatch(playerStatisticsActions.fetchPlayerStatistics());

    return (
        <NavigationContainer>
            <MenuNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
