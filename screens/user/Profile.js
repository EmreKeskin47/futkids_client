import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
} from "react-native";
import PlayerAttributes from "../../components/PlayerAttributes";
import PlayerInfo from "../../components/PlayerInfo";
import PlayerStats from "../../components/PlayerStats";
import { useDispatch, useSelector } from "react-redux";
import * as playerCardActions from "../../redux/actions/playerCard-action";
import * as playerAttributeActions from "../../redux/actions/playerAttribute-action";
import * as playerStaticsActions from "../../redux/actions/playerStatistics-action";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";

const MyProfile = ({ route, navigation }) => {
    const image = require("../../assets/background-image.jpg");
    const dispatch = useDispatch();
    var playerID = useSelector(
        (state) => state.playerProfileStore.user.playerID
    );

    useEffect(() => {
        dispatch(playerCardActions.getPlayerCardInfo(playerID));
        dispatch(playerAttributeActions.fetchPlayerAttributes(playerID));
        dispatch(playerStaticsActions.getStatsOfPlayer(playerID));
    }, [dispatch, playerID]);

    if (playerID == "") {
        return (
            <View style={styles.notFound}>
                <Text>Profiliniz bulunamadı</Text>
            </View>
        );
    } else {
        const playerCard = useSelector(
            (state) => state.playerCardStore.selectedPlayerCard
        );

        const attr = useSelector(
            (state) => state.playerAttributeStore.selectedPlayerAttribute
        );

        const stats = useSelector(
            (state) => state.playerStatisticsStore.selectedPlayerStatistics
        );
        return (
            <View style={styles.root}>
                <ScrollView>
                    <ImageBackground source={image} style={styles.image}>
                        <PlayerInfo playerCard={playerCard} />
                        <View style={styles.surround}>
                            <PlayerAttributes attr={attr} />
                            <PlayerStats stats={stats} />
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
    },
    notFound: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    surround: {
        height: 750,
        marginTop: 40,
        marginHorizontal: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    topContainer: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 50,
    },
    column: {
        height: 170,
        borderRadius: 8,
        backgroundColor: "black",
        opacity: 0.7,
        flex: 1,
        margin: 20,
        justifyContent: "space-around",
    },
    columnInside: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemL: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
    },
    itemR: {
        fontSize: 20,
        fontWeight: "bold",
        color: "yellow",
        marginRight: 10,
    },
    itemM: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    profilePicture: {
        height: 200,
        width: 150,
    },
});

export const screenOptions = (navData) => {
    return {
        headerTitle: "Profilim",
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
            <Ionicons
                name={"camera-outline"}
                size={25}
                color={"white"}
                style={{ marginRight: 20 }}
                onPress={() => {
                    navData.navigation.push("Profil Resmi");
                }}
            />
        ),
    };
};

export default MyProfile;
