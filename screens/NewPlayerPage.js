import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as playerActions from "../store/players-action";
import PlayerForm from "../components/PlayerForm";
//End of imports

const NewPlayerPage = (props) => {
    const { playerPosition, playerName, playerOverall } = props;

    const dispatch = useDispatch();
    const onSave = (playerName, position, overall) => {
        dispatch(playerActions.addPlayer(playerName, position, overall));
        props.navigation.pop();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}> Yeni Oyuncu </Text>
            <PlayerForm
                playerPosition={playerPosition}
                playerName={playerName}
                playerOverall={playerOverall}
                onSave={onSave}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },

    formLabel: {
        fontSize: 30,
        margin: 30,
        color: "#fff",
    },
});

export default NewPlayerPage;
