import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const TeamOfTheWeek = ({ team, subs }) => {
    const totw = team.sort((a, b) => {
        return b.weeklyVote - a.weeklyVote;
    });
    const sub = subs;
    const [att, setAtt] = useState([]);
    const [mid, setMid] = useState([]);
    const [def, setDef] = useState([]);
    const [gk, setGk] = useState([]);

    for (var i = 0; i < totw.length; i++) {
        var item = totw[i];
        if (item.position == "ATT") {
            if (att.length < 2) {
                const newPlayer = item;
                newPlayer.name = newPlayer.name.split(" ")[0];
                setAtt((oldArray) => [...oldArray, newPlayer]);
            }
        } else if (item.position == "MID") {
            if (mid.length < 4) {
                const newPlayer2 = item;
                newPlayer2.name = newPlayer2.name.split(" ")[0];
                setMid((oldArray) => [...oldArray, newPlayer2]);
            }
        } else if (item.position == "DEF") {
            if (def.length < 4) {
                const newPlayer3 = item;
                newPlayer3.name = newPlayer3.name.split(" ")[0];
                setDef((oldArray) => [...oldArray, newPlayer3]);
            }
        } else if (item.position == "GK") {
            if (gk.length < 1) {
                const newPlayer4 = item;
                newPlayer4.name = newPlayer4.name.split(" ")[0];
                setGk((oldArray) => [...oldArray, newPlayer4]);
            }
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <View style={styles.att}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {att[0] == undefined ? "Bos" : att[0].name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {att[1] == undefined ? "Bos" : att[1].name}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {mid[0] == undefined ? "Bos" : mid[0].name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {mid[1] == undefined ? "Bos" : mid[1].name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {mid[2] == undefined ? "Bos" : mid[2].name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {mid[3] == undefined ? "Bos" : mid[3].name}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.def}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {def[0] == undefined ? "Bos" : def[0].name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {def[1] == undefined ? "Bos" : def[1].name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {def[2] == undefined ? "Bos" : def[2].name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {def[3] == undefined ? "Bos" : def[3].name}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.gk}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Ionicons
                                name="person-circle-sharp"
                                style={styles.playerImage}
                            />
                            <Text style={styles.playerName}>
                                {gk[0] == undefined ? "Bos" : gk[0].name}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "space-around",
    },
    playerName: {
        fontSize: RFPercentage(2),
        color: "white",
    },
    row: {
        justifyContent: "space-around",
        flexDirection: "row",
    },
    att: {
        paddingTop: 80,
    },
    mid: {
        paddingTop: 130,
    },
    def: {
        paddingTop: 180,
    },
    gk: {
        paddingTop: 80,
    },
    column: {
        justifyContent: "space-between",
        //backgroundColor: Colors.primary,
        alignItems: "center",
    },
    playerImage: {
        fontSize: 40,
    },
});

export default TeamOfTheWeek;
