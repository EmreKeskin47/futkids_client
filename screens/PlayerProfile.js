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
import PlayerInfo from "../components/PlayerInfo";
import PlayerStats from "../components/PlayerStats";
//redux
import { useDispatch, useSelector } from "react-redux";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";

const PlayerProfilePage = ({ route, navigation }) => {
  const image = require("../assets/background-image.jpg");
  const profilePicture = require("../assets/ronaldo-custom.png");

  const tempID = 12;
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerCardActions.getPlayerCardInfo(id));
    dispatch(playerAttributeActions.fetchPlayerAttributes(tempID));
  }, [dispatch]);

  const playerCard = useSelector(
    (state) => state.playerCardStore.selectedPlayerCard
  );

  const attr = useSelector(
    (state) => state.playerAttributeStore.selectedPlayerAttribute
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
            <PlayerInfo name={name} position={position} overall={overall} />
            <View style={styles.surround}>
              <PlayerAttributes />
            </View>
            <PlayerStats />
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
