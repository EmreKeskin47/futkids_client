import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import Colors from "../constants/Colors";

const PlayerForm = (props) => {
    const { playerPosition, playerName, playerOverall, onSave } = props;
    const [position, setPosition] = useState(playerPosition);
    const [name, setName] = useState(playerName);
    const [overall, setOverall] = useState(playerOverall);

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
                    keyboardType="numeric"
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

                {props.onDelete ? (
                    <View>
                        <Button
                            title="Değişiklikleri Kaydet"
                            color="#fff"
                            onPress={() => {
                                onSave(name, position, overall);
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
                            onSave(name, position, overall);
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
