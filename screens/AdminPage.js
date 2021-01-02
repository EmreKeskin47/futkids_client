import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/Card";
import * as playerActions from "../store/players-action";

const AdminPage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(playerActions.fetchPlayers());
    }, [dispatch]);

    const players = useSelector((state) => state.playerStore.players);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}> List Of Players</Text>
            </View>
            <FlatList
                data={players}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <PlayerCard
                        id={item.id}
                        playerName={item.playerName}
                        playerPosition={item.playerPosition}
                        overall={item.overall}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    textContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default AdminPage;
