import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-community/picker";
import Colors from "../constants/Colors";
import PlayerCard from "../models/PlayerCard";
import PlayerAttribute from "../models/PlayerAttribute";
import { ScrollView } from "react-native-gesture-handler";

const PlayerForm = (props) => {
  const { playerAttribute, playerCard, onSave } = props;

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
  }, [playerCard, playerAttribute]);

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

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          label={name}
          style={styles.inputStyle}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          label="Puan"
          style={styles.inputStyle}
          onChangeText={(text) => setOverall(text)}
          value={overall}
        />
        <Picker
          selectedValue={position}
          itemStyle={{ color: "white" }}
          onValueChange={(currentPosition) => setPosition(currentPosition)}
        >
          <Picker.Item label="GK" value="GK" />
          <Picker.Item label="DEF" value="DEF" />
          <Picker.Item label="MID" value="MID" />
          <Picker.Item label="ATT" value="ATT" />
        </Picker>
        <TextInput
          label="Forma Numarası"
          style={styles.inputStyle}
          onChangeText={(text) => setKitNumber(text)}
          value={kitNumber}
        />
        <TextInput
          label="Ayak"
          style={styles.inputStyle}
          onChangeText={(text) => setFoot(text)}
          value={foot}
        />
        <TextInput
          label="Age"
          style={styles.inputStyle}
          onChangeText={(text) => setAge(text)}
          value={age}
        />

        {/* Player Attributes */}

        <TextInput
          label="Pace"
          style={styles.inputStyle}
          onChangeText={(text) => setPace(text)}
          value={pace}
        />
        <TextInput
          label="Shooting"
          style={styles.inputStyle}
          onChangeText={(text) => setShooting(text)}
          value={shooting}
        />
        <TextInput
          label="Passing"
          style={styles.inputStyle}
          onChangeText={(text) => setPassing(text)}
          value={passing}
        />
        <TextInput
          label="Physical"
          style={styles.inputStyle}
          onChangeText={(text) => setPhysical(text)}
          value={physical}
        />
        <TextInput
          label="Defending"
          style={styles.inputStyle}
          onChangeText={(text) => setDefending(text)}
          value={defending}
        />
        <TextInput
          label="GoalKeep"
          style={styles.inputStyle}
          onChangeText={(text) => setGoalKeeper(text)}
          value={goalKeeper}
        />
        <TextInput
          label="Dribbling"
          style={styles.inputStyle}
          onChangeText={(text) => setDribbling(text)}
          value={dribbling}
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
});

export default PlayerForm;
