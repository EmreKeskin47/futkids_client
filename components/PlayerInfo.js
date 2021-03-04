import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PlayerInfo = (props) => {
  const profilePicture = require("../assets/ronaldo-custom.png");

  return (
    <View style={styles.topContainer}>
      <Image source={profilePicture} style={styles.profilePicture} />
      <View style={styles.column}>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Isim</Text>
          <Text style={styles.itemR}>{props.name}</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Takim</Text>
          <Text style={styles.itemR}>Galatasaray</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Mevki</Text>
          <Text style={styles.itemR}>{props.position}</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Numara</Text>
          <Text style={styles.itemR}>{props.kitNumber}</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Guc</Text>
          <Text style={styles.itemR}>{props.overall}</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Boy</Text>
          <Text style={styles.itemR}>{props.height}</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Kilo</Text>
          <Text style={styles.itemR}>{props.weight}</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Yas</Text>
          <Text style={styles.itemR}>{props.age}</Text>
        </View>
        <View style={styles.columnInside}>
          <Text style={styles.itemL}>Ayak</Text>
          <Text style={styles.itemR}>{props.foot}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  topContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 50,
  },
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
  profilePicture: {
    height: 200,
    width: 150,
  },
});

export default PlayerInfo;
