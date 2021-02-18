import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import PlayerSummary from "../components/PlayerSummary";
import { useDispatch, useSelector } from "react-redux";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";

const PlayerCard = (props) => {
  const tempID = 13;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(playerAttributeActions.fetchPlayerAttributes(tempID));
  }, [dispatch]);
  const attr = useSelector(
    (state) => state.playerAttributeStore.selectedPlayerAttribute
  );
  const {
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    goalKeeper,
  } = attr;
  const { id, playerName, playerPosition, overall, kitNumber } = props;
  return (
    <View>
      <Card style={{ marginTop: 50 }}>
        <CardItem header bordered style={styles.cardHeader}>
          <Text style={styles.subheading}>{playerName}</Text>
          <Text style={styles.subheading}>{playerPosition}</Text>
          <Text style={styles.subheading}>{overall}</Text>
        </CardItem>
        <CardItem>
          <PlayerSummary
            pace={pace}
            shooting={shooting}
            passing={passing}
            dribbling={dribbling}
            defending={defending}
            physical={physical}
            goalKeeper={goalKeeper}
            style={styles.attrs}
          />
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  attrs: {
    height: 500,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
  },
  cardHeader: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  footer: {
    width: "100%",
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default PlayerCard;
