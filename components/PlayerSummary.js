import React from "react";
import { ViewBase } from "react-native";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import Colors from "../constants/Colors";

const PlayerSummary = (props) => {
  const profilePicture = require("../assets/ronaldo-custom.png");
  return (
    <SafeAreaView style={styles.root}>
      <Image source={profilePicture} style={styles.profilePicture} />
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
  },
  bar: {
    backgroundColor: "white",
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 8,
    margin: 10,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  profilePicture: {
    height: 200,
    width: 150,
    alignSelf: "center",
    margin: 20,
  },
});

export default PlayerSummary;
