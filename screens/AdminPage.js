import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/Card";
import * as playerActions from "../store/players-action";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const AdminPage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(playerActions.fetchPlayers());
    }, [dispatch]);

    let selectedPlayerID = "";

    const navigateToDetail = (id) => {
        props.navigation.navigate("Player Details", { id: id });
    };

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
                                selectedPlayerID = item.id;
                                navigateToDetail(selectedPlayerID);
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

export const screenOptions = (navData) => {
    return {
        headerTitle: "Player List",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={
                        Platform.OS === "android" ? "md-menu" : "ios-menu"
                    }
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="New"
                    iconName={
                        Platform.OS === "android"
                            ? "add-circle"
                            : "ios-add-circle"
                    }
                    onPress={() => {
                        navData.navigation.navigate("New Player");
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default AdminPage;
