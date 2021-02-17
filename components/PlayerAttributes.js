import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomProgressBar from "./CustomProgressBar";

const PlayerAttributes = (props) => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Pace</Text>
                    <Text style={styles.itemR}>{props.pace}</Text>
                    <CustomProgressBar progress={props.pace / 1000} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Shoot</Text>
                    <Text style={styles.itemR}>{props.shooting}</Text>
                    <CustomProgressBar progress={props.shooting / 1000} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Pass</Text>
                    <Text style={styles.itemR}>{props.passing}</Text>
                    <CustomProgressBar progress={props.passing / 1000} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Drib</Text>
                    <Text style={styles.itemR}>{props.dribbling}</Text>
                    <CustomProgressBar progress={props.dribbling / 1000} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Def</Text>
                    <Text style={styles.itemR}>{props.defending}</Text>
                    <CustomProgressBar progress={props.defending / 1000} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Phy</Text>
                    <Text style={styles.itemR}>{props.physical}</Text>
                    <CustomProgressBar progress={props.physical / 1000} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Gk</Text>
                    <Text style={styles.itemR}>{props.goalKeeper}</Text>
                    <CustomProgressBar progress={props.goalKeeper / 1000} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Yas</Text>
                    <Text style={styles.itemR}>16</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Ayak</Text>
                    <Text style={styles.itemR}>S</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Boy</Text>
                    <Text style={styles.itemR}>1.79</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.itemL}>Uyruk</Text>
                    <Text style={styles.itemR}>tr</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "black",
        opacity: 0.7,
        borderRadius: 8,
    },
    bar: {
        backgroundColor: "white",
    },
    row: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    column: {
        height: 30,
        borderRadius: 8,
        flex: 1,
        margin: 20,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    itemL: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    itemR: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 20,
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
});

export default PlayerAttributes;
