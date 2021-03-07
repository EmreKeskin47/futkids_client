import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerForm from "../../components/PlayerForm";
import * as playerCardActions from "../../redux/actions/playerCard-action";
import * as playerAttributeActions from "../../redux/actions/playerAttribute-action";
import * as playerActions from "../../redux/actions/player-actions";

const PlayerDetailsPage = ({ route, navigation }) => {
    const { id } = route.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(playerCardActions.getPlayerCardInfo(id));
        dispatch(playerAttributeActions.fetchPlayerAttributes(id));
    }, [dispatch]);

    const playerCard = useSelector(
        (state) => state.playerCardStore.selectedPlayerCard
    );
    const playerAttribute = useSelector(
        (state) => state.playerAttributeStore.selectedPlayerAttribute
    );

    if (!playerCard || !playerAttribute) {
        return (
            <View style={styles.text}>
                <Text>No Player Screen</Text>
            </View>
        );
    } else {
        const onSave = (playerCardToCreate, attributeToCreate) => {
            dispatch(
                playerCardActions.updatePlayerCard(
                    playerCardToCreate.playerID,
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
                playerAttributeActions.updatePlayerAttribute(
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
            navigation.push("Admin Page");
        };

        const onDelete = () => {
            dispatch(playerActions.deletePlayer(id));
            navigation.push("Admin Page");
        };

        return (
            <View style={{ flex: 1 }}>
                <PlayerForm
                    playerCard={playerCard}
                    playerAttribute={playerAttribute}
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
