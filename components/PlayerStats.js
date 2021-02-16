import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaViewStatusBar,
  StatusBar,
  Button,
  SafeAreaView,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const PlayerStats = (props) => {
  return (
    <View style={styles.column}>
      <Text style={styles.itemM}>Istatistik</Text>
      <View style={styles.columnInside}>
        <Text style={styles.itemL}>Gol</Text>
        <Text style={styles.itemR}>23</Text>
      </View>
      <View style={styles.columnInside}>
        <Text style={styles.itemL}>Asist</Text>
        <Text style={styles.itemR}>6</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    height: 170,
    borderRadius: 8,
    backgroundColor: "black",
    opacity: 0.7,
    flex: 1,
    margin: 20,
    justifyContent: "space-around",
  },
  columnInside: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemL: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  itemR: {
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow",
    marginRight: 10,
  },
  itemM: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
});

export default PlayerStats;
