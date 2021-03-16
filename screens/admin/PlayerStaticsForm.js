import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-community/picker";
import Colors from "../../constants/Colors";
import PlayerCard from "../../models/PlayerCard";
import PlayerStatistics from "../../models/PlayerStatistics";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import PlayerForm from "../../components/PlayerForm";
import * as playerCardActions from "../../redux/actions/playerCard-action";
import * as playerStatisticsActions from "../../redux/actions/playerStatistics-action";
import * as playerActions from "../../redux/actions/player-actions";

const PlayerStaticsForm = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerCardActions.getPlayerCardInfo(id));
    dispatch(playerStatisticsActions.fetchPlayerStatistics(id));
  }, [dispatch]);

  const playerCard = useSelector(
    (state) => state.playerCardStore.selectedPlayerCard
  );
  console.log(playerCard);
  const playerStatistics = useSelector(
    (state) => state.playerStatisticsStore.selectedPlayerStatistics
  );
  console.log(playerStatistics);

  //Player Card
  const [position, setPosition] = useState(playerCard.position);
  const [name, setName] = useState(playerCard.name);
  const [overall, setOverall] = useState(playerCard.overall);
  const [kitNumber, setKitNumber] = useState(playerCard.kitNumber);
  const [age, setAge] = useState(playerCard.age);
  const [foot, setFoot] = useState(playerCard.foot);

  //   //Player Statistics
  const [goals, setGoals] = useState(playerStatistics.goals);
  const [assists, setAssists] = useState(playerStatistics.assists);
  const [red, setRed] = useState(playerStatistics.red);
  const [yellow, setYellow] = useState(playerStatistics.yellow);
  const [motm, setMotm] = useState(playerStatistics.motm);
  const [cleanSheet, setCleanSheet] = useState(playerStatistics.cleanSheet);
  const [form, setForm] = useState(playerStatistics.form);
  const [playedMatches, setPlayedMatches] = useState(
    playerStatistics.playedMatches
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          label=" Goals"
          style={styles.inputStyle}
          //onChangeText={(text) => setName(text)}
          defaultValue={goals}
        />
        <TextInput
          label="Assists"
          style={styles.inputStyle}
          //onChangeText={(text) => setOverall(text)}
          defaultValue={assists}
        />
        <TextInput
          label="Red Cards"
          style={styles.inputStyle}
          //onChangeText={(text) => setOverall(text)}
          defaultValue={red}
        />
        <TextInput
          label="Yellow Cards"
          style={styles.inputStyle}
          //onChangeText={(text) => setOverall(text)}
          defaultValue={yellow}
        />
        <TextInput
          label="Motm"
          style={styles.inputStyle}
          //onChangeText={(text) => setOverall(text)}
          defaultValue={motm}
        />
        <TextInput
          label="Clean Sheets"
          style={styles.inputStyle}
          //onChangeText={(text) => setOverall(text)}
          defaultValue={cleanSheet}
        />
        <TextInput
          label="Form"
          style={styles.inputStyle}
          //onChangeText={(text) => setOverall(text)}
          defaultValue={form}
        />
        <TextInput
          label="Played Matches"
          style={styles.inputStyle}
          //onChangeText={(text) => setOverall(text)}
          defaultValue={playedMatches}
        />
        {/* <Picker
          selectedValue={"deneme"}
          itemStyle={{ color: "white" }}
          //onValueChange={(currentPosition) => setPosition(currentPosition)}
        >
          <Picker.Item label="GK" value="GK" />
          <Picker.Item label="DEF" value="DEF" />
          <Picker.Item label="MID" value="MID" />
          <Picker.Item label="ATT" value="ATT" />
        </Picker> */}

        {/* {props.onDelete ? (
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
        )} */}
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

export default PlayerStaticsForm;
