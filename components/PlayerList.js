import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import * as playerCardActions from "../redux/actions/playerCard-action";
import { TouchableOpacity } from "react-native-gesture-handler";

const PlayerList = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(playerCardActions.fetchPlayerCards());
    }, [dispatch]);

    const [selectedPlayerID, setSelectedPlayerID] = useState("");
    const playerCards = useSelector(
        (state) => state.playerCardStore.playerCards
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={playerCards}
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
                                playerName={item.name}
                                playerPosition={item.position}
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
