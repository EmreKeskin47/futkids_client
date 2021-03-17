import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import * as playerActions from "../../redux/actions/player-actions";
import PlayerForm from "../../components/PlayerForm";
import PlayerCard from "../../models/PlayerCard";
import PlayerAttribute from "../../models/PlayerAttribute";

const NewPlayerPage = (props) => {
    const dispatch = useDispatch();

    const onSave = (playerCardToCreate, attributeToCreate) => {
        dispatch(
            playerActions.createPlayer(
                "test",
                playerCardToCreate,
                attributeToCreate
            )
        );
        props.navigation.push("Admin Page");
    };

    const emptyPlayerCard = new PlayerCard(
        "",
        "",
        "",
        "GK",
        "",
        "",
        "",
        "R",
        ""
    );

    const emptyPlayerAttribute = new PlayerAttribute(
        "",
        "",
        40,
        40,
        40,
        40,
        40,
        40,
        40
    );

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}> Yeni Oyuncu </Text>
            <PlayerForm
                playerAttribute={emptyPlayerAttribute}
                playerCard={emptyPlayerCard}
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
