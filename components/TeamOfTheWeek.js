import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Image,
} from "react-native";
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
    const imageAlt = require("../assets/messi2.jpeg");

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
                        {att[0] != undefined && (
                            <View style={styles.column}>
                                {att[0].image != "" ? (
                                    <Image
                                        source={{ uri: att[0].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {att[0].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {att[0].overall}
                                </Text>
                            </View>
                        )}

                        {att[1] != undefined && (
                            <View style={styles.column}>
                                {att[1].image != "" ? (
                                    <Image
                                        source={{ uri: att[1].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}
                                <Text style={styles.playerName}>
                                    {att[1].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {att[1].overall}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={styles.row}>
                        {mid[0] != undefined && (
                            <View style={styles.column}>
                                {mid[0].image != "" ? (
                                    <Image
                                        source={{ uri: mid[0].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {mid[0].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {mid[0].overall}
                                </Text>
                            </View>
                        )}
                        {mid[1] != undefined && (
                            <View style={styles.column}>
                                {mid[1].image != "" ? (
                                    <Image
                                        source={{ uri: mid[1].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {mid[1].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {mid[1].overall}
                                </Text>
                            </View>
                        )}
                        {mid[2] != undefined && (
                            <View style={styles.column}>
                                {mid[2].image != "" ? (
                                    <Image
                                        source={{ uri: mid[2].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {mid[2].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {mid[2].overall}
                                </Text>
                            </View>
                        )}
                        {mid[3] != undefined && (
                            <View style={styles.column}>
                                {mid[3].image != "" ? (
                                    <Image
                                        source={{ uri: mid[3].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {mid[3].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {mid[3].overall}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
                <View style={styles.def}>
                    <View style={styles.row}>
                        {def[0] != undefined && (
                            <View style={styles.column}>
                                {def[0].image != "" ? (
                                    <Image
                                        source={{ uri: def[0].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {def[0].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {def[0].overall}
                                </Text>
                            </View>
                        )}
                        {def[1] != undefined && (
                            <View style={styles.column}>
                                {def[1].image != "" ? (
                                    <Image
                                        source={{ uri: def[1].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {def[1].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {def[1].overall}
                                </Text>
                            </View>
                        )}
                        {def[2] != undefined && (
                            <View style={styles.column}>
                                {def[2].image != "" ? (
                                    <Image
                                        source={{ uri: def[2].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {def[2].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {def[2].overall}
                                </Text>
                            </View>
                        )}
                        {def[3] != undefined && (
                            <View style={styles.column}>
                                {def[3].image != "" ? (
                                    <Image
                                        source={{ uri: def[3].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {def[3].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {def[3].overall}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
                <View style={styles.gk}>
                    <View style={styles.row}>
                        {gk[0] != undefined && (
                            <View style={styles.column}>
                                {gk[0].image != "" ? (
                                    <Image
                                        source={{ uri: gk[0].image }}
                                        style={styles.playerImage}
                                        defaultSource={imageAlt}
                                    />
                                ) : (
                                    <Image
                                        source={imageAlt}
                                        style={styles.playerImage}
                                    />
                                )}

                                <Text style={styles.playerName}>
                                    {gk[0].name}
                                </Text>
                                <Text style={styles.playerName}>
                                    {gk[0].overall}
                                </Text>
                            </View>
                        )}
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
        paddingTop: RFValue(50),
    },
    mid: {
        paddingTop: RFValue(70),
    },
    def: {
        paddingTop: RFValue(95),
    },
    gk: {
        paddingTop: RFValue(55),
    },
    column: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    playerImage: {
        width: 55,
        height: 55,
        borderRadius: 100,
        marginBottom: 5,
    },
});

export default TeamOfTheWeek;
