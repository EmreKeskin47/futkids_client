import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import PlayerSummary from "../components/PlayerSummary";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PlayerCard = (props) => {
  const { playerID, name, position, overall } = props.cardData;
  return (
    <View style={{ padding: 20 }}>
      <Card style={styles.cardBackground}>
        <CardItem header bordered style={styles.cardHeader}>
          <View style={styles.imageContainer}>
            <View>
              <Ionicons name="person-circle-sharp" style={styles.playerImage} />
            </View>
            <View>
              <Text style={styles.subheading}>{position}</Text>
              <Text style={styles.subheading}>{overall}</Text>
              <Text style={styles.playerName}>{name}</Text>
            </View>
          </View>
          <CardItem style={{ backgroundColor: Colors.primary }}>
            {props.attr ? (
              <PlayerSummary id={playerID} attr={props.attr} />
            ) : (
              <ActivityIndicator size="large" />
            )}
          </CardItem>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBackground: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subheading: {
    fontSize: RFPercentage(2.5),
    color: "#fff",
    textAlign: "right",
  },
  playerName: {
    fontSize: RFPercentage(3),
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
  },
  cardHeader: {
    backgroundColor: Colors.primary,
    flexDirection: "column",
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  playerImage: {
    fontSize: 80,
  },
});

export default PlayerCard;
