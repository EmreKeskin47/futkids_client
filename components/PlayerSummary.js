import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const PlayerSummary = (props) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Pace</Text>
          <Text style={styles.itemR}>{props.pace}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.itemL}>Shoot</Text>
          <Text style={styles.itemR}>{props.shooting}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Pass</Text>
          <Text style={styles.itemR}>{props.passing}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.itemL}>Phy</Text>
          <Text style={styles.itemR}>{props.physical}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Def</Text>
          <Text style={styles.itemR}>{props.defending}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.itemL}>Gk</Text>
          <Text style={styles.itemR}>{props.goalKeeper}</Text>
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
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  bar: {
    backgroundColor: "white",
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    color: "black",
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

export default PlayerSummary;
