import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import Colors from "../constants/Colors";
import PlayerCard from "../models/PlayerCard";

const PlayerForm = (props) => {
    const { playerCard, onSave } = props;
    const [position, setPosition] = useState(playerCard.position);
    const [name, setName] = useState(playerCard.name);
    const [overall, setOverall] = useState(playerCard.overall);
    const [kitNumber, setKitNumber] = useState(playerCard.kitNumber);
    const [age, setAge] = useState(playerCard.age);
    const [foot, setFoot] = useState(playerCard.foot);

    return (
        <View style={styles.container}>
            <View>
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

                {props.onDelete ? (
                    <View>
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
                                onSave(newPlayerCard);
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
                    <Button
                        title="Oyuncuyu Kaydet"
                        color="#fff"
                        onPress={() => {
                            const newPlayerCard = new PlayerCard(
                                "",
                                "",
                                name,
                                position,
                                overall,
                                "",
                                kitNumber,
                                foot,
                                age
                            );
                            onSave(newPlayerCard);
                        }}
                    />
                )}
            </View>
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
});

export default PlayerForm;
