import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerForm from "../../components/PlayerForm";
import * as playerCardActions from "../../redux/actions/playerCard-action";
import * as playerAttributeActions from "../../redux/actions/playerAttribute-action";
import * as playerStatisticsActions from "../../redux/actions/playerStatistics-action";
import * as playerActions from "../../redux/actions/player-actions";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const PlayerDetailsPage = ({ route, navigation }) => {
    const { id } = route.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(playerCardActions.getPlayerCardInfo(id));
        dispatch(playerAttributeActions.fetchPlayerAttributes(id));
        dispatch(playerStatisticsActions.getStatsOfPlayer(id));
        dispatch(playerActions.getInfo(id));
    }, [dispatch]);

    const playerCard = useSelector(
        (state) => state.playerCardStore.selectedPlayerCard
    );
    const playerAttribute = useSelector(
        (state) => state.playerAttributeStore.selectedPlayerAttribute
    );
    const player = useSelector((state) => state.playerStore.selectedPlayer);

    if (!playerCard || !playerAttribute) {
        return (
            <View style={styles.text}>
                <Text>No Player Screen</Text>
            </View>
        );
    } else {
        const onSave = (player, playerCardToCreate, attributeToCreate) => {
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
            dispatch(
                playerActions.updatePlayer(
                    playerCardToCreate.playerID,
                    player.email,
                    "",
                    ""
                )
            );
            navigation.push("Admin Page");
        };

        const onDelete = () => {
            dispatch(playerActions.deletePlayer(id));
            dispatch(playerCardActions.deletePlayerCard(id));
            dispatch(playerAttributeActions.deletePlayerAttribute(id));
            navigation.push("Admin Page");
        };

        return (
            <View style={{ flex: 1 }}>
                <PlayerForm
                    playerID={id}
                    playerCard={playerCard}
                    playerAttribute={playerAttribute}
                    player={player}
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

export const screenOptions = (navData) => {
    const id = navData.route.params.id;
    return {
        headerTitle: "Oyuncu Detayları ",
        headerRight: () => (
            <Ionicons
                name={"bar-chart-outline"}
                size={25}
                color={"white"}
                style={{ marginRight: 20 }}
                onPress={() => {
                    navData.navigation.push("Oyuncu İstatistikleri", {
                        id: id,
                    });
                }}
            />
        ),
    };
};
export default PlayerDetailsPage;
