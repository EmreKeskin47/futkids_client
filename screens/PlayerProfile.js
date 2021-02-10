import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerAttributes from "../components/PlayerAttributes";
import PlayerForm from "../components/PlayerForm";
import * as playerActions from "../store/players-action";

const PlayerProfilePage = () => {
    return <SafeAreaView style={styles.root}>
        <View style={styles.surround}>
            <PlayerAttributes
                style={styles.attrCard}


            />
        </View>
    </SafeAreaView>
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
    attrCard: {
        
    }

});

export default PlayerProfilePage;
