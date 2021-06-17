import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-community/picker";
import Colors from "../constants/Colors";
import PlayerCard from "../models/PlayerCard";
import PlayerAttribute from "../models/PlayerAttribute";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native";
import Player from "../models/Player";

const PlayerForm = (props) => {
    const { player, playerAttribute, playerCard, onSave } = props;
    const attrOptions = Array.from(Array(100).keys());
    const ageOptions = Array.from(Array(20).keys());

    useEffect(() => {
        setName(playerCard.name);
        setPosition(playerCard.position);
        setOverall(playerCard.overall);
        setKitNumber(playerCard.kitNumber);
        setAge(playerCard.age);
        setFoot(playerCard.foot);

        setPace(playerAttribute.pace + "");
        setShooting(playerAttribute.shooting + "");
        setPassing(playerAttribute.passing + "");
        setDribbling(playerAttribute.dribbling + "");
        setDefending(playerAttribute.defending + "");
        setPhysical(playerAttribute.physical + "");
        setGoalKeeper(playerAttribute.goalKeeper + "");

        setEmail(player.email);
    }, [player, playerCard, playerAttribute]);

    //Player Card
    const [name, setName] = useState();
    const [position, setPosition] = useState();
    const [overall, setOverall] = useState();
    const [kitNumber, setKitNumber] = useState();
    const [age, setAge] = useState();
    const [foot, setFoot] = useState();

    //Player Attribute
    const [pace, setPace] = useState();
    const [shooting, setShooting] = useState();
    const [passing, setPassing] = useState();
    const [dribbling, setDribbling] = useState();
    const [defending, setDefending] = useState();
    const [physical, setPhysical] = useState();
    const [goalKeeper, setGoalKeeper] = useState();

    const [email, setEmail] = useState();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TextInput
                    label="Oyuncu Adi"
                    style={styles.inputStyle}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />

                <View style={{ flexDirection: "row" }}>
                    <View style={styles.threePicker}>
                        <Text style={styles.attrPickerLabel}>Pozisyon</Text>
                        <Picker
                            selectedValue={position}
                            itemStyle={{ color: "white" }}
                            onValueChange={(currentPosition) =>
                                setPosition(currentPosition)
                            }
                        >
                            <Picker.Item label="GK" value="GK" />
                            <Picker.Item label="DEF" value="DEF" />
                            <Picker.Item label="MID" value="MID" />
                            <Picker.Item label="ATT" value="ATT" />
                        </Picker>
                    </View>

                    <View style={styles.threePicker}>
                        <Text style={styles.attrPickerLabel}>Ayak</Text>
                        <Picker
                            selectedValue={foot}
                            itemStyle={{ color: "white" }}
                            onValueChange={(foot) => setFoot(foot)}
                        >
                            <Picker.Item label="R" value="R" />
                            <Picker.Item label="L" value="L" />
                        </Picker>
                    </View>

                    <View style={styles.threePicker}>
                        <Text style={styles.attrPickerLabel}>Güç</Text>
                        <Picker
                            selectedValue={overall}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setOverall(text)}
                        >
                            {attrOptions.map((i) => {
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

                <TextInput
                    label="email adresi"
                    style={styles.inputStyle}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />

                <View style={{ flexDirection: "row" }}>
                    <View style={styles.threePicker}>
                        <Text style={styles.attrPickerLabel}>Yaş</Text>
                        <Picker
                            selectedValue={age}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setAge(text)}
                        >
                            {ageOptions.map((i) => {
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
                        <Text style={styles.attrPickerLabel}>Forma No</Text>
                        <Picker
                            selectedValue={kitNumber}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setKitNumber(text)}
                        >
                            {attrOptions.map((i) => {
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
                        <Text style={styles.attrPickerLabel}>Hız</Text>
                        <Picker
                            selectedValue={pace}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setPace(text)}
                        >
                            {attrOptions.map((i) => {
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

                {/* Player Attributes */}
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.threePicker}>
                        <Text style={styles.attrPickerLabel}>Dripling</Text>
                        <Picker
                            selectedValue={dribbling}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setDribbling(text)}
                        >
                            {attrOptions.map((i) => {
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
                        <Text style={styles.attrPickerLabel}>Şut</Text>
                        <Picker
                            selectedValue={shooting}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setShooting(text)}
                        >
                            {attrOptions.map((i) => {
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
                        <Text style={styles.attrPickerLabel}>Pas</Text>
                        <Picker
                            selectedValue={passing}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setPassing(text)}
                        >
                            {attrOptions.map((i) => {
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
                        <Text style={styles.attrPickerLabel}>Fizik</Text>
                        <Picker
                            selectedValue={physical}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setPhysical(text)}
                        >
                            {attrOptions.map((i) => {
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
                        <Text style={styles.attrPickerLabel}>Defans</Text>
                        <Picker
                            selectedValue={defending}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setDefending(text)}
                        >
                            {attrOptions.map((i) => {
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
                        <Text style={styles.attrPickerLabel}>Kalecilik</Text>
                        <Picker
                            selectedValue={goalKeeper}
                            itemStyle={{ color: "white" }}
                            onValueChange={(text) => setGoalKeeper(text)}
                        >
                            {attrOptions.map((i) => {
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

                {props.onDelete ? (
                    <View style={styles.button}>
                        <Button
                            title="Değişiklikleri Kaydet"
                            color="#fff"
                            onPress={() => {
                                const player = new Player("", email, "", "");
                                const newPlayerCard = new PlayerCard(
                                    "",
                                    playerCard.playerID,
                                    name,
                                    position,
                                    overall,
                                    "https://firebasestorage.googleapis.com/v0/b/futkids-client.appspot.com/o/players%2" +
                                        playerCard.playerID +
                                        "?alt=media",
                                    kitNumber,
                                    foot,
                                    age
                                );
                                const newPlayerAttribute = new PlayerAttribute(
                                    "",
                                    playerAttribute.playerID,
                                    pace,
                                    shooting,
                                    passing,
                                    dribbling,
                                    defending,
                                    physical,
                                    goalKeeper
                                );
                                onSave(
                                    player,
                                    newPlayerCard,
                                    newPlayerAttribute
                                );
                            }}
                        />
                        <Button
                            title="Oyuncuyu Sil"
                            color="#fff"
                            onPress={() => {
                                props.onDelete();
                            }}
                        />
                    </View>
                ) : (
                    <View style={styles.button}>
                        <Button
                            title="Oyuncuyu Kaydet"
                            color="#fff"
                            disabled={!name || !overall || !kitNumber || !age}
                            onPress={() => {
                                const newPlayerCard = new PlayerCard(
                                    "",
                                    "12",
                                    name,
                                    position,
                                    overall,
                                    "https://firebasestorage.googleapis.com/v0/b/futkids-client.appspot.com/o/players%2" +
                                        playerCard.playerID +
                                        "?alt=media",
                                    kitNumber,
                                    foot,
                                    age
                                );
                                const newPlayerAttribute = new PlayerAttribute(
                                    "",
                                    "12",
                                    pace,
                                    shooting,
                                    passing,
                                    dribbling,
                                    defending,
                                    physical,
                                    goalKeeper
                                );
                                onSave(
                                    email,
                                    newPlayerCard,
                                    newPlayerAttribute
                                );
                            }}
                        />
                    </View>
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 35,
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
    },
    formText: {
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 20,
    },
    text: {
        color: "#fff",
        fontSize: 25,
    },
    button: {
        paddingVertical: 40,
    },
    attrPicker: {
        width: "40%",
        paddingTop: "10%",
    },
    threePicker: {
        width: "28%",
        paddingTop: "10%",
        height: 250,
    },
    attrPickerLabel: { textAlign: "center", color: "white" },
});

export default PlayerForm;
