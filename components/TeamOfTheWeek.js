import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const TeamOfTheWeek = ({ team, subs }) => {
  const totw = team;
  const sub = subs;

  //TODO: ad uzunsa siknti ad soyad alt alta
  //TODO: tepede navla dene
  //TODO: baska cihazla dene
  //TODO: mevkilere gore arraylere bol ve top olanlari al

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.att}>
          <View style={styles.row}>
            <Text style={styles.playerName}>{totw[2].name}</Text>
            <Text style={styles.playerName}>{totw[2].name}</Text>
          </View>
        </View>
        <View style={styles.mid}>
          <View style={styles.row}>
            <Text style={styles.playerName}>{totw[2].name}</Text>
            <Text style={styles.playerName}>{totw[2].name}</Text>
            <Text style={styles.playerName}>{totw[2].name}</Text>
            <Text style={styles.playerName}>{totw[2].name}</Text>
          </View>
        </View>
        <View style={styles.def}>
          <View style={styles.row}>
            <Text style={styles.playerName}>{totw[2].name}</Text>
            <Text style={styles.playerName}>{totw[2].name}</Text>
            <Text style={styles.playerName}>{totw[2].name}</Text>
            <Text style={styles.playerName}>{totw[2].name}</Text>
          </View>
        </View>
        <View style={styles.gk}>
          <View style={styles.row}>
            <Text style={styles.playerName}>{totw[0].name}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
  },
  playerName: {
    fontSize: RFPercentage(2),
    color: "white",
  },
  row: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  att: {
    paddingTop: 100,
  },
  mid: {
    paddingTop: 200,
  },
  def: {
    paddingTop: 250,
  },
  gk: {
    paddingTop: 80,
  },
});

export default TeamOfTheWeek;
