import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
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
            <FlatList
                data={players}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <PlayerCard
                        playerName={item.playerName}
                        playerPosition={item.playerPosition}
                        overall={item.overall}
                        id={item._id}
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
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default AdminPage;
