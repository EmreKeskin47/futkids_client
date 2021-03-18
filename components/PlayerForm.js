import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-community/picker";
import Colors from "../constants/Colors";
import PlayerCard from "../models/PlayerCard";
import PlayerAttribute from "../models/PlayerAttribute";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native";
const PlayerForm = (props) => {
  const { playerAttribute, playerCard, onSave } = props;
  const attrOptions = Array.from(Array(100).keys());

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
          label="Oyuncu Adi"
          style={styles.inputStyle}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          label="Güç"
          style={styles.inputStyle}
          onChangeText={(text) => setOverall(text)}
          value={overall}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.attrPicker}>
            <Text style={styles.attrPickerLabel}>Pozisyon</Text>
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
          </View>

          <View style={styles.attrPicker}>
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
        </View>

        <TextInput
          label="Forma Numarası"
          style={styles.inputStyle}
          onChangeText={(text) => setKitNumber(text)}
          value={kitNumber}
        />

        <TextInput
          label="Yaş"
          style={styles.inputStyle}
          onChangeText={(text) => setAge(text)}
          value={age}
        />

        {/* Player Attributes */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.attrPicker}>
            <Text style={styles.attrPickerLabel}>Hız</Text>
            <Picker
              selectedValue={pace}
              itemStyle={{ color: "white" }}
              onValueChange={(text) => setPace(text)}
            >
              {attrOptions.map((i) => {
                return <Picker.Item key={i} value={i + ""} label={i + ""} />;
              })}
            </Picker>
          </View>
          <View style={styles.attrPicker}>
            <Text style={styles.attrPickerLabel}>Şut</Text>
            <Picker
              selectedValue={shooting}
              itemStyle={{ color: "white" }}
              onValueChange={(text) => setShooting(text)}
            >
              {attrOptions.map((i) => {
                return <Picker.Item key={i} value={i + ""} label={i + ""} />;
              })}
            </Picker>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.attrPicker}>
            <Text style={styles.attrPickerLabel}>Pas</Text>
            <Picker
              selectedValue={passing}
              itemStyle={{ color: "white" }}
              onValueChange={(text) => setPassing(text)}
            >
              {attrOptions.map((i) => {
                return <Picker.Item key={i} value={i + ""} label={i + ""} />;
              })}
            </Picker>
          </View>
          <View style={styles.attrPicker}>
            <Text style={styles.attrPickerLabel}>Fizik</Text>
            <Picker
              selectedValue={physical}
              itemStyle={{ color: "white" }}
              onValueChange={(text) => setPhysical(text)}
            >
              {attrOptions.map((i) => {
                return <Picker.Item key={i} value={i + ""} label={i + ""} />;
              })}
            </Picker>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.attrPicker}>
            <Text style={styles.attrPickerLabel}>Defans</Text>
            <Picker
              selectedValue={defending}
              itemStyle={{ color: "white" }}
              onValueChange={(text) => setDefending(text)}
            >
              {attrOptions.map((i) => {
                return <Picker.Item key={i} value={i + ""} label={i + ""} />;
              })}
            </Picker>
          </View>
          <View style={styles.attrPicker}>
            <Text style={styles.attrPickerLabel}>Kalecilik</Text>
            <Picker
              selectedValue={goalKeeper}
              itemStyle={{ color: "white" }}
              onValueChange={(text) => setGoalKeeper(text)}
            >
              {attrOptions.map((i) => {
                return <Picker.Item key={i} value={i + ""} label={i + ""} />;
              })}
            </Picker>
          </View>
        </View>
        <View style={styles.attrPicker}>
          <Text style={styles.attrPickerLabel}>Dripling</Text>
          <Picker
            selectedValue={dribbling}
            itemStyle={{ color: "white" }}
            onValueChange={(text) => setDribbling(text)}
          >
            {attrOptions.map((i) => {
              return <Picker.Item key={i} value={i + ""} label={i + ""} />;
            })}
          </Picker>
        </View>

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
              disabled={!name || !overall || !kitNumber || !age}
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
  attrPicker: {
    width: "40%",
    paddingTop: "10%",
  },
  attrPickerLabel: { textAlign: "center", color: "white" },
});

export default PlayerForm;
