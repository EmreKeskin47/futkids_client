import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/Card";
import * as playerActions from "../store/players-action";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const PlayerList = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(playerActions.fetchPlayers());
    }, [dispatch]);

    const [selectedPlayerID, setSelectedPlayerID] = useState("");
    const players = useSelector((state) => state.playerStore.players);

    return (
        <View style={styles.container}>
            <FlatList
                data={players}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedPlayerID(item.id);
                                props.navigate(selectedPlayerID);
                            }}
                        >
                            <PlayerCard
                                id={item.id}
                                playerName={item.playerName}
                                playerPosition={item.playerPosition}
                                overall={item.overall}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default PlayerList;
