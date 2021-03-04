import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import Colors from "../constants/Colors";
import PlayerCard from "../models/PlayerCard";
import PlayerAttribute from "../models/PlayerAttribute";
import { ScrollView } from "react-native-gesture-handler";

const PlayerForm = (props) => {
    const { playerAttribute, playerCard, onSave } = props;

    //Player Card
    const [position, setPosition] = useState(playerCard.position);
    const [name, setName] = useState(playerCard.name);
    const [overall, setOverall] = useState(playerCard.overall);
    const [kitNumber, setKitNumber] = useState(playerCard.kitNumber);
    const [age, setAge] = useState(playerCard.age);
    const [foot, setFoot] = useState(playerCard.foot);

    //Player Attribute
    const [pace, setPace] = useState(playerAttribute.pace);
    const [shooting, setShooting] = useState(playerAttribute.shooting);
    const [passing, setPassing] = useState(playerAttribute.passing);
    const [dribbling, setDribbling] = useState(playerAttribute.dribbling);
    const [defending, setDefending] = useState(playerAttribute.defending);
    const [physical, setPhysical] = useState(playerAttribute.physical);
    const [goalKeeper, setGoalKeeper] = useState(playerAttribute.goalKeeper);

    return (
        <View style={styles.container}>
            <ScrollView>
                <TextInput
                    placeholder="İsim"
                    style={styles.inputStyle}
                    onChangeText={(text) => setName(text)}
                    defaultValue={name}
                />
                <TextInput
                    placeholder="Puan"
                    style={styles.inputStyle}
                    onChangeText={(text) => setOverall(text)}
                    defaultValue={overall}
                />
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
                <TextInput
                    placeholder="Kit Number"
                    style={styles.inputStyle}
                    onChangeText={(text) => setKitNumber(text)}
                    defaultValue={kitNumber}
                />
                <TextInput
                    placeholder="Foot"
                    style={styles.inputStyle}
                    onChangeText={(text) => setFoot(text)}
                    defaultValue={foot}
                />
                <TextInput
                    placeholder="Age"
                    style={styles.inputStyle}
                    onChangeText={(text) => setAge(text)}
                    defaultValue={age}
                />

                <TextInput
                    placeholder="Pace"
                    style={styles.inputStyle}
                    onChangeText={(text) => setPace(text)}
                    defaultValue={pace}
                />
                <TextInput
                    placeholder="Shooting"
                    style={styles.inputStyle}
                    onChangeText={(text) => setShooting(text)}
                    defaultValue={shooting}
                />
                <TextInput
                    placeholder="Passing"
                    style={styles.inputStyle}
                    onChangeText={(text) => setPassing(text)}
                    defaultValue={passing}
                />
                <TextInput
                    placeholder="Physical"
                    style={styles.inputStyle}
                    onChangeText={(text) => setPhysical(text)}
                    defaultValue={physical}
                />
                <TextInput
                    placeholder="Defending"
                    style={styles.inputStyle}
                    onChangeText={(text) => setDefending(text)}
                    defaultValue={defending}
                />
                <TextInput
                    placeholder="GoalKeep"
                    style={styles.inputStyle}
                    onChangeText={(text) => setGoalKeeper(text)}
                    defaultValue={goalKeeper}
                />
                <TextInput
                    placeholder="Dribbling"
                    style={styles.inputStyle}
                    onChangeText={(text) => setDribbling(text)}
                    defaultValue={dribbling}
                />

                {props.onDelete ? (
                    <View style={styles.button}>
                        <Button
                            title="Değişiklikleri Kaydet"
                            color="#fff"
                            onPress={() => {
                                const newPlayerCard = new PlayerCard(
                                    "",
                                    playerCard.playerID,
                                    name,
                                    position,
                                    overall,
                                    "",
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
                                onSave(newPlayerCard, newPlayerAttribute);
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
                            onPress={() => {
                                const newPlayerCard = new PlayerCard(
                                    "",
                                    "12",
                                    name,
                                    position,
                                    overall,
                                    "",
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
                                onSave(newPlayerCard, newPlayerAttribute);
                            }}
                        />
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: "#fff",
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
});

export default PlayerForm;
