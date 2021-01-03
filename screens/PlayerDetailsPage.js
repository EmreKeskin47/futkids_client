import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerForm from "../components/PlayerForm";
import * as playerActions from "../store/players-action";

const PlayerDetailsPage = ({ route, navigation }) => {
    const { id } = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(playerActions.getPlayerInfo(id));
    }, [dispatch]);

    const player = useSelector((state) => state.playerStore.selectedPlayer);
    if (!player) {
        return (
            <View style={styles.text}>
                <Text>No Player Screen</Text>
            </View>
        );
    } else {
        const { playerName, playerPosition, overall } = player;
        const onSave = (playerName, position, overall) => {
            dispatch(
                playerActions.updatePlayer(id, playerName, position, overall)
            );
            navigation.navigate("Admin Page");
        };

        const onDelete = () => {
            dispatch(playerActions.deletePlayer(id));
            navigation.navigate("Admin Page");
        };

        return (
            <View style={{ flex: 1 }}>
                <PlayerForm
                    playerPosition={playerPosition}
                    playerName={playerName}
                    playerOverall={overall}
                    onSave={onSave}
                    onDelete={onDelete}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default PlayerDetailsPage;
