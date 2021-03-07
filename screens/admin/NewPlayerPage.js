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
        props.navigation.pop();
    };

    const emptyPlayerCard = new PlayerCard(
        "",
        "",
        "nameTest",
        "ATT",
        "test",
        "test",
        "test",
        "test",
        "test"
    );

    const emptyPlayerAttribute = new PlayerAttribute(
        "",
        "",
        "12",
        "12",
        "12",
        "12",
        "12",
        "12",
        "12"
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
{
    /**
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
        dispatch(
            playerAttributeActions.createPlayerAttribute(
                attributeToCreate.playerID,
                attributeToCreate.pace,
                attributeToCreate.shooting,
                attributeToCreate.passing,
                attributeToCreate.dribbling,
                attributeToCreate.defending,
                attributeToCreate.physical,
                attributeToCreate.goalKeeper
            )
        );

*/
}
