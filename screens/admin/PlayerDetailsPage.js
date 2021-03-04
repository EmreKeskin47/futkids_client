import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerForm from "../../components/PlayerForm";
import * as playerCardActions from "../../redux/actions/playerCard-action";

const PlayerDetailsPage = ({ route, navigation }) => {
    const { id } = route.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(playerCardActions.getPlayerCardInfo(id));
    }, [dispatch]);

    const playerCard = useSelector(
        (state) => state.playerCardStore.selectedPlayerCard
    );
    if (!playerCard) {
        return (
            <View style={styles.text}>
                <Text>No Player Screen</Text>
            </View>
        );
    } else {
        const { name, position, overall } = playerCard;
        const onSave = (playerCardToCreate) => {
            dispatch(
                playerCardActions.updatePlayerCard(
                    id,
                    playerCardToCreate.name,
                    playerCardToCreate.position,
                    playerCardToCreate.overall,
                    "image",
                    playerCardToCreate.kitNumber,
                    playerCardToCreate.foot,
                    playerCardToCreate.age
                )
            );
            navigation.navigate("Admin Page");
        };

        const onDelete = () => {
            dispatch(playerCardActions.deletePlayerCard(id));
            navigation.navigate("Admin Page");
        };

        return (
            <View style={{ flex: 1 }}>
                <PlayerForm
                    playerCard={playerCard}
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
