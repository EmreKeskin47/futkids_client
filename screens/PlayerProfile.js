import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerAttributes from "../components/PlayerAttributes";
import PlayerForm from "../components/PlayerForm";
import * as playerActions from "../store/players-action";

const PlayerProfilePage = () => {
  const image = require("../assets/background-image.jpg");
  const profilePicture = require("../assets/ronaldo-custom.png");

  return (
    <View style={styles.root}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.topContainer}>
          <Image source={profilePicture} style={styles.profilePicture} />
          <View style={styles.column}>
            <View style={styles.columnInside}>
              <Text style={styles.itemL}>Isim</Text>
              <Text style={styles.itemR}>Ronaldo</Text>
            </View>
            <View style={styles.columnInside}>
              <Text style={styles.itemL}>Takim</Text>
              <Text style={styles.itemR}>Galatasaray</Text>
            </View>
            <View style={styles.columnInside}>
              <Text style={styles.itemL}>Mevki</Text>
              <Text style={styles.itemR}>Forvet</Text>
            </View>
            <View style={styles.columnInside}>
              <Text style={styles.itemL}>Numara</Text>
              <Text style={styles.itemR}>9</Text>
            </View>
          </View>
        </View>
        <View style={styles.surround}>
          <PlayerAttributes />
        </View>
        <View style={styles.column}>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Text style={styles.itemM}>Istatistik</Text>
          </View>
          <View style={styles.columnInside}>
            <Text style={styles.itemL}>Gol</Text>
            <Text style={styles.itemR}>23</Text>
          </View>
          <View style={styles.columnInside}>
            <Text style={styles.itemL}>Asist</Text>
            <Text style={styles.itemR}>6</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  surround: {
    height: 400,
    marginTop: 40,
  },
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
    opacity: 0.5,
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
  },
  profilePicture: {
    height: 200,
    width: 150,
  },
});

export default PlayerProfilePage;
