import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import PlayerAttributes from "../components/PlayerAttributes";
//redux
import { useDispatch, useSelector } from "react-redux";
import * as playerCardActions from "../redux/actions/playerCard-action";

const PlayerProfilePage = ({ route, navigation }) => {
  const image = require("../assets/background-image.jpg");
  const profilePicture = require("../assets/ronaldo-custom.png");

  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerCardActions.getPlayerCardInfo(id));
  }, [dispatch]);

  const playerCard = useSelector(
    (state) => state.playerCardStore.selectedPlayerCard
  );

  if (!playerCard) {
    return (
      <View style={styles.root}>
        <Text>No Player Selected</Text>
      </View>
    );
  } else {
    const { name, position, overall } = playerCard;

    return (
      <View style={styles.root}>
        <ScrollView>
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.topContainer}>
              <Image source={profilePicture} style={styles.profilePicture} />
              <View style={styles.column}>
                <View style={styles.columnInside}>
                  <Text style={styles.itemL}>Isim</Text>
                  <Text style={styles.itemR}>{name}</Text>
                </View>
                <View style={styles.columnInside}>
                  <Text style={styles.itemL}>Takim</Text>
                  <Text style={styles.itemR}>Galatasaray</Text>
                </View>
                <View style={styles.columnInside}>
                  <Text style={styles.itemL}>Mevki</Text>
                  <Text style={styles.itemR}>{position}</Text>
                </View>
                <View style={styles.columnInside}>
                  <Text style={styles.itemL}>Numara</Text>
                  <Text style={styles.itemR}>9</Text>
                </View>
                <View style={styles.columnInside}>
                  <Text style={styles.itemL}>Guc</Text>
                  <Text style={styles.itemR}>{overall}</Text>
                </View>
              </View>
            </View>
            <View style={styles.surround}>
              <PlayerAttributes />
            </View>
            <View style={styles.column}>
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
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
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  surround: {
    height: 400,
    marginTop: 40,
    marginHorizontal: 20,
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
  },
  profilePicture: {
    height: 200,
    width: 150,
  },
});

export default PlayerProfilePage;
