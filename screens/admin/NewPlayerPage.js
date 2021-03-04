import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import * as playerCardActions from "../../redux/actions/playerCard-action";
import PlayerForm from "../../components/PlayerForm";
import PlayerCard from "../../models/PlayerCard";

const NewPlayerPage = (props) => {
    const dispatch = useDispatch();

    const onSave = (playerCardToCreate) => {
        dispatch(
            playerCardActions.addPlayerCard(
                "12",
                playerCardToCreate.name,
                playerCardToCreate.position,
                playerCardToCreate.overall,
                "image",
                playerCardToCreate.kitNumber,
                playerCardToCreate.foot,
                playerCardToCreate.age
            )
        );
        props.navigation.pop();
    };

    const emptyPlayerCard = new PlayerCard(
        "",
        "",
        "",
        "ATT",
        "",
        "",
        "",
        "",
        ""
    );

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}> Yeni Oyuncu </Text>
            <PlayerForm playerCard={emptyPlayerCard} onSave={onSave} />
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
