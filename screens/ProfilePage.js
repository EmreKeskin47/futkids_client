import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

//Redux
import { useDispatch, useSelector } from "react-redux";
import * as playerActions from "../store/players-action";

const ProfilePage = ({ route, navigation }) => {
    const { id } = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(playerActions.getPlayerInfo(id));
    }, [dispatch]);

    const player = useSelector((state) => state.playerStore.selectedPlayer);
    if (!player) {
        return (
            <View style={styles.root}>
                <Text>No Player Selected</Text>
            </View>
        );
    } else {
        const { playerName, playerPosition, overall } = player;

        return (
            <View style={styles.root}>
                <Text>{playerName}</Text>
                <Text>{playerPosition}</Text>
                <Text>{overall}</Text>
                
            </View>
        );
    }
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
export default ProfilePage;
