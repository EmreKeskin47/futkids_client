import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";
import { Button } from "react-native";
import Colors from "../constants/Colors";

const PlayerList = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState("");
    const [name, setName] = useState("");

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
                <View style={styles.searchField}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        value={name}
                        onChangeText={(text) => {
                            setName(text.toLowerCase());
                        }}
                        placeholder="İsim Ara"
                        style={{
                            backgroundColor: "#fff",
                        }}
                    />
                </View>
                <FlatList
                    data={
                        position
                            ? playerCards.filter(
                                  (item) =>
                                      item.name.toLowerCase().includes(name) &&
                                      item.position == position
                              )
                            : playerCards.filter((item) =>
                                  item.name.toLowerCase().includes(name)
                              )
                    }
                    extraData={attrList}
                    keyExtractor={(item) => {
                        return item.playerID;
                    }}
                    renderItem={renderItem}
                    onRefresh={() => onRefresh()}
                    refreshing={isLoading}
                />
                <View style={styles.buttons}>
                    <Button
                        title="GK"
                        color={Colors.primary}
                        style={{ height: 40 }}
                        onPress={() => setPosition("GK")}
                    />
                    <Button
                        title="DEF"
                        color={Colors.primary}
                        style={{ height: 40 }}
                        onPress={() => setPosition("DEF")}
                    />
                    <Button
                        title="MID"
                        color={Colors.primary}
                        style={{ height: 40 }}
                        onPress={() => setPosition("MID")}
                    />
                    <Button
                        title="ATT"
                        color={Colors.primary}
                        style={{ height: 40 }}
                        onPress={() => setPosition("ATT")}
                    />
                    <Button
                        title="Hepsi"
                        color={Colors.primary}
                        size={20}
                        onPress={() => setPosition("")}
                    />
                </View>
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
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    searchField: {
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
        height: 40,
    },
});

export default PlayerList;
