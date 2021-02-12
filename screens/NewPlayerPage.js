import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as playerCardActions from "../store/actions/playerCard-action";
import PlayerForm from "../components/PlayerForm";

const NewPlayerPage = (props) => {
    const dispatch = useDispatch();
    const onSave = (playerName, position, overall) => {
        dispatch(
            playerCardActions.addPlayerCard(playerName, position, overall)
        );
        props.navigation.pop();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}> Yeni Oyuncu </Text>
            <PlayerForm
                playerPosition={""}
                playerName={""}
                playerOverall={0}
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
