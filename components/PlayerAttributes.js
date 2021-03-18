import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomProgressBar from "./CustomProgressBar";

const PlayerAttributes = (props) => {
  const {
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    goalKeeper,
  } = props.attr;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Hız</Text>
          <Text style={styles.itemR}>{pace}</Text>
          <CustomProgressBar progress={pace} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Şut</Text>
          <Text style={styles.itemR}>{shooting}</Text>
          <CustomProgressBar progress={shooting} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Pas</Text>
          <Text style={styles.itemR}>{passing}</Text>
          <CustomProgressBar progress={passing} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Drp</Text>
          <Text style={styles.itemR}>{dribbling}</Text>
          <CustomProgressBar progress={dribbling} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Def</Text>
          <Text style={styles.itemR}>{defending}</Text>
          <CustomProgressBar progress={defending} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Fiz</Text>
          <Text style={styles.itemR}>{physical}</Text>
          <CustomProgressBar progress={physical} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Kal</Text>
          <Text style={styles.itemR}>{goalKeeper}</Text>
          <CustomProgressBar progress={goalKeeper} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 8,
  },
  bar: {
    backgroundColor: "white",
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
  },
  column: {
    height: 30,
    borderRadius: 8,
    flex: 1,
    margin: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  itemL: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  itemR: {
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow",
  },
  itemRG: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  itemRR: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  itemRY: {
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default PlayerAttributes;
