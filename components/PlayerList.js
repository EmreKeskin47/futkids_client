import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

const PlayerList = (props) => {
    const dispatch = useDispatch();
    const attrList = useSelector(
        (state) => state.playerAttributeStore.playerAttributes
    );
    const playerCards = useSelector(
        (state) => state.playerCardStore.playerCards
    );

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        dispatch(playerAttributeActions.getAllAttributes())
            .then(dispatch(playerCardActions.fetchPlayerCards()))
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
    }, [dispatch]);

    const renderItem = ({ item }) => {
        if (attrList) {
            var attr = attrList.filter((attr) => {
                return attr.playerID === item.playerID;
            });
            attr = attr[0];
        }
        return (
            <TouchableOpacity
                onPress={() => {
                    dispatch(
                        playerAttributeActions.fetchPlayerAttributes(
                            item.playerID
                        )
                    );
                    props.navigate(item.playerID);
                }}
            >
                <PlayerCard
                    playerID={item.playerID}
                    playerName={item.name}
                    playerPosition={item.position}
                    overall={item.overall}
                    attr={attr}
                />
            </TouchableOpacity>
        );
    };
    if (isLoading) {
        return (
            <View style={styles.noPlayer}>
                <ActivityIndicator size="large" />
            </View>
        );
    } else if (playerCards.length === 0) {
        return (
            <View style={styles.noPlayer}>
                <Text>No player cards exist</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={playerCards}
                    extraData={attrList}
                    keyExtractor={(item) => {
                        return item.playerID;
                    }}
                    renderItem={renderItem}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noPlayer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const mapStateToProps = (state) => ({
    cards: state.playerCardStore.playerCards,
    attr: state.playerAttributeStore.playerAttributes,
});
export default connect(mapStateToProps)(PlayerList);
