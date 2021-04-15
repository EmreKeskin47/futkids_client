import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Card } from "react-native-elements";
import Leaderboard from "react-native-leaderboard";

const TopAssistPage = () => {
    const playerCardList = useSelector(
        (state) => state.playerCardStore.playerCards
    );
    var playerStats = useSelector(
        (state) => state.playerStatisticsStore.playerStats
    );
    playerStats = playerStats.sort((a, b) => {
        return b.assists - a.assists;
    });

    const topAssist = playerStats.map((t1) => ({
        ...t1,
        ...playerCardList.find((t2) => t2.playerID === t1.playerID),
    }));
    return (
        <View>
            <Card>
                <Card.Title>ASSİST KRALLIĞI</Card.Title>
                <Card.Divider />
                <Leaderboard
                    data={topAssist.slice(0, 10)}
                    sortBy="assists"
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
export default TopAssistPage;
