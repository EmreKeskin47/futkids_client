import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const PlayerList = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState("");

    const attrList = useSelector(
        (state) => state.playerAttributeStore.playerAttributes
    );
    var playerCards = useSelector((state) => state.playerCardStore.playerCards);
    const getPlayerListOnRefresh = () => {
        dispatch(playerAttributeActions.getAllAttributes())
            .then(dispatch(playerCardActions.fetchPlayerCards()))
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
    };

    onRefresh = () => {
        setIsLoading(true);
        getPlayerListOnRefresh();
    };

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
                <PlayerCard cardData={item} attr={attr} />
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
                <DropDownPicker
                    items={[
                        { label: "GK", value: "GK" },
                        { label: "DEF", value: "DEF" },
                        { label: "MID", value: "MID" },
                        { label: "ATT", value: "ATT" },
                    ]}
                    defaultIndex={0}
                    containerStyle={{ height: 50 }}
                    placeholder={"Lutfen bir pozisyon seçiniz"}
                    onChangeItem={(item) => {
                        setPosition(item.value);
                    }}
                    style={styles.dropdown}
                />
                <FlatList
                    data={
                        position
                            ? playerCards.filter(
                                  (item) => item.position === position
                              )
                            : playerCards
                    }
                    extraData={attrList}
                    keyExtractor={(item) => {
                        return item.playerID;
                    }}
                    renderItem={renderItem}
                    onRefresh={() => onRefresh()}
                    refreshing={isLoading}
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
    dropdown: {
        marginHorizontal: 20,
        fontFamily: "Avenir-Medium",
    },
});

export default PlayerList;
