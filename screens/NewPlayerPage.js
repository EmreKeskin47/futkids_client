import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as playerActions from "../store/players-action";

const NewPlayerPage = () => {
    const [position, setPosition] = useState("GK");
    const [playerName, setPlayerName] = useState("");
    const [overall, setOverall] = useState("");
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}> Yeni Oyuncu </Text>
            <View>
                <TextInput
                    placeholder="İsim"
                    style={styles.inputStyle}
                    onChangeText={(text) => setPlayerName(text)}
                    defaultValue={playerName}
                />
                <TextInput
                    placeholder="Puan"
                    keyboardType="number-pad"
                    style={styles.inputStyle}
                    onChangeText={(text) => setOverall(text)}
                    defaultValue={overall}
                />
                <Picker
                    selectedValue={position}
                    onValueChange={(currentPosition) =>
                        setPosition(currentPosition)
                    }
                >
                    <Picker.Item label="GK" value="GK" />
                    <Picker.Item label="DEF" value="DEF" />
                    <Picker.Item label="MID" value="MID" />
                    <Picker.Item label="ATT" value="ATT" />
                </Picker>

                <Button
                    title="Kaydet"
                    color="#fff"
                    onPress={() =>
                        dispatch(
                            playerActions.addPlayer(
                                playerName,
                                position,
                                overall
                            )
                        )
                    }
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
        justifyContent: "center",
    },

    formLabel: {
        fontSize: 30,
        margin: 30,
        color: "#fff",
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

export default NewPlayerPage;
