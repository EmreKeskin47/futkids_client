import React from "react";
import {
    View,
    Platform,
    StyleSheet,
    ActivityIndicator,
    ImageBackground,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import TeamOfTheWeek from "../components/TeamOfTheWeek";

const StadiumTest = () => {
    const image = require("../assets/background-image.jpg");
    const playerCardList = useSelector(
        (state) => state.playerCardStore.playerCards
    );

    if (!playerCardList) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        return (
            <ImageBackground source={image} style={styles.image}>
                <TeamOfTheWeek
                    team={playerCardList}
                    subs={playerCardList}
                    style={styles.container}
                />
            </ImageBackground>
        );
    }
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "Haftanın Takımı ",
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
    };
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    centered: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});

export default StadiumTest;
