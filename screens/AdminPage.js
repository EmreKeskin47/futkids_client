import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/Card";
import * as playerActions from "../store/players-action";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

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
                keyExtractor={(item) => {
                    return item.id;
                }}
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
