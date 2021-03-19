import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const PlayerSummary = (props) => {
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
      <View
        style={{
          borderRadius: 15,
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        }}
      >
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.itemL}> HIZ</Text>
            <Text style={styles.itemR}>{pace}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.itemL}>ŞUT</Text>
            <Text style={styles.itemR}>{shooting}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.itemL}>PAS</Text>
            <Text style={styles.itemR}>{passing}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.itemL}>FİZ</Text>
            <Text style={styles.itemR}>{physical}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.itemL}>DEF</Text>
            <Text style={styles.itemR}>{defending}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.itemL}>KAL</Text>
            <Text style={styles.itemR}>{goalKeeper}</Text>
          </View>
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
  },
  column: {
    height: 20,
    flex: 1,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  itemL: {
    fontSize: RFPercentage(2),
    color: "black",
    textAlign: "center",
  },
  itemR: {
    fontSize: RFPercentage(2),
    fontWeight: "bold",
    color: "black",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default PlayerSummary;
