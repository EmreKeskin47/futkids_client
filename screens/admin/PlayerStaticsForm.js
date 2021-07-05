import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import * as playerStatisticsActions from "../../redux/actions/playerStatistics-action";
import { Picker } from "@react-native-community/picker";

const PlayerStaticsForm = (props) => {
    const dispatch = useDispatch();
    const formOptions = Array.from(Array(11).keys());
    const statOptions = Array.from(Array(101).keys());

    const playerStatistics = useSelector(
        (state) => state.playerStatisticsStore.selectedPlayerStatistics
    );
    useEffect(() => {
        setGoals(playerStatistics.goals + "");
        setAssists(playerStatistics.assists + "");
        setRed(playerStatistics.red + "");
        setYellow(playerStatistics.yellow + "");
        setMotm(playerStatistics.motm + "");
        setCleanSheet(playerStatistics.cleanSheet + "");
        setForm(playerStatistics.form);
        setPlayedMatches(playerStatistics.playedMatches + "");
    }, []);

    //   //Player Statistics
    const [goals, setGoals] = useState();
    const [assists, setAssists] = useState();
    const [red, setRed] = useState();
    const [yellow, setYellow] = useState();
    const [motm, setMotm] = useState();
    const [cleanSheet, setCleanSheet] = useState();
    const [form, setForm] = useState();
    const [playedMatches, setPlayedMatches] = useState();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Goller</Text>
                    <Picker
                        selectedValue={goals}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setGoals(text)}
                    >
                        {statOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>

                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Asistler</Text>
                    <Picker
                        selectedValue={assists}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setAssists(text)}
                    >
                        {statOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>

                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Kırmızı Kart</Text>
                    <Picker
                        selectedValue={red}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setRed(text)}
                    >
                        {statOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>
            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Sarı Kart</Text>
                    <Picker
                        selectedValue={yellow}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setYellow(text)}
                    >
                        {statOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>

                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Maçın Adamı</Text>
                    <Picker
                        selectedValue={motm}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setMotm(text)}
                    >
                        {statOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>

                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Clean Sheet</Text>
                    <Picker
                        selectedValue={cleanSheet}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setCleanSheet(text)}
                    >
                        {statOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>
            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Oynanan Maç</Text>
                    <Picker
                        selectedValue={playedMatches}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setPlayedMatches(text)}
                    >
                        {statOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>

                <View style={styles.threePicker}>
                    <Text style={styles.attrPickerLabel}>Form</Text>
                    <Picker
                        selectedValue={form}
                        itemStyle={styles.picker}
                        onValueChange={(text) => setForm(text)}
                    >
                        {formOptions.map((i) => {
                            return (
                                <Picker.Item
                                    key={i}
                                    value={i + ""}
                                    label={i + ""}
                                />
                            );
                        })}
                    </Picker>
                </View>
            </View>

            <View style={styles.button}>
                <Button
                    title="İstatistikleri Kaydet"
                    color="#fff"
                    style={styles.button}
                    onPress={() => {
                        dispatch(
                            playerStatisticsActions.updatePlayerStatistics(
                                props.route.params.id,
                                goals,
                                assists,
                                red,
                                yellow,
                                motm,
                                cleanSheet,
                                form,
                                playedMatches
                            )
                        );
                        props.navigation.push("Admin Page");
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
    },
    button: {
        paddingTop: 50,
    },
    attrPickerLabel: {
        textAlign: "center",
        color: "white",
        paddingTop: 10,
    },
    threePicker: {
        width: "28%",
        paddingTop: "10%",
        height: 180,
    },
    picker: {
        color: "white",
        height: 150,
    },
});

export default PlayerStaticsForm;
