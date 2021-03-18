import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import * as playerStatisticsActions from "../../redux/actions/playerStatistics-action";

const PlayerStaticsForm = (props) => {
  const dispatch = useDispatch();

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
      <ScrollView>
        <TextInput
          label=" Goller"
          style={styles.inputStyle}
          onChangeText={(text) => setGoals(text)}
          value={goals}
        />
        <TextInput
          label="Asistler"
          style={styles.inputStyle}
          onChangeText={(text) => setAssists(text)}
          value={assists}
        />
        <TextInput
          label="Kırmızı Kartlar"
          style={styles.inputStyle}
          onChangeText={(text) => setRed(text)}
          value={red}
        />
        <TextInput
          label="Sarı Kartlar"
          style={styles.inputStyle}
          onChangeText={(text) => setYellow(text)}
          value={yellow}
        />
        <TextInput
          label="Maçın Oyuncusu"
          style={styles.inputStyle}
          onChangeText={(text) => setMotm(text)}
          value={motm}
        />
        <TextInput
          label="Gol Yenmeyen Maçlar"
          style={styles.inputStyle}
          onChangeText={(text) => setCleanSheet(text)}
          value={cleanSheet}
        />
        <TextInput
          label="Form"
          style={styles.inputStyle}
          onChangeText={(text) => setForm(text)}
          value={form}
        />
        <TextInput
          label="Oynanan Maçlar"
          style={styles.inputStyle}
          onChangeText={(text) => setPlayedMatches(text)}
          value={playedMatches}
        />
        <View style={styles.button}>
          <Button
            title="Değişiklikleri Kaydet"
            color="#fff"
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
              props.navigation.goBack();
            }}
          />
        </View>
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
