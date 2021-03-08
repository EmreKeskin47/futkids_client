import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlayerStats = (props) => {
    const {
        goals,
        assists,
        red,
        yellow,
        motm,
        cleanSheet,
        form,
        playedMatches,
    } = props.stats;

    return (
        <View style={styles.column}>
            <Text style={styles.itemM}>Istatistik</Text>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>Gol</Text>
                <Text style={styles.itemR}>{goals}</Text>
            </View>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>Asist</Text>
                <Text style={styles.itemR}>{assists}</Text>
            </View>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>Red Card</Text>
                <Text style={styles.itemR}>{red}</Text>
            </View>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>Yellow Card</Text>
                <Text style={styles.itemR}>{yellow}</Text>
            </View>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>Motm</Text>
                <Text style={styles.itemR}>{motm}</Text>
            </View>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>CleanSheet</Text>
                <Text style={styles.itemR}>{cleanSheet}</Text>
            </View>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>Form</Text>
                <Text style={styles.itemR}>{form}</Text>
            </View>
            <View style={styles.columnInside}>
                <Text style={styles.itemL}>PlayedMatches</Text>
                <Text style={styles.itemR}>{playedMatches}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        height: 500,
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
        alignSelf: "center",
    },
});

export default PlayerStats;
