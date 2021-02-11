import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ImageBackground  } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerAttributes from "../components/PlayerAttributes";
import PlayerForm from "../components/PlayerForm";
import * as playerActions from "../store/players-action";

const PlayerProfilePage = () => {

    const image = require('../assets/background-image.jpg');

    return <View style={styles.root}>
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.surround}>
            <PlayerAttributes/>
        </View>
        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    root : {
        flex: 1,
        justifyContent: 'center'
    },
    surround: {
        height: 400,
        marginTop: 70
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }

});

export default PlayerProfilePage;
