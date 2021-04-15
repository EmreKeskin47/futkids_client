import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Card } from "react-native-elements";
import Leaderboard from "react-native-leaderboard";

const TopScorerPage = () => {
    const playerCardList = useSelector(
        (state) => state.playerCardStore.playerCards
    );
    var playerStats = useSelector(
        (state) => state.playerStatisticsStore.playerStats
    );
    playerStats = playerStats.sort((a, b) => {
        return b.goals - a.goals;
    });

    const topScorers = playerStats.map((t1) => ({
        ...t1,
        ...playerCardList.find((t2) => t2.playerID === t1.playerID),
    }));
    return (
        <View>
            <Card>
                <Card.Title>GOL KRALLIĞI</Card.Title>
                <Card.Divider />
                <Leaderboard
                    data={topScorers.slice(0, 10)}
                    sortBy="goals"
                    labelBy="name"
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default TopScorerPage;
