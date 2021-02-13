import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

//Redux
import { useDispatch, useSelector } from "react-redux";
import * as playerCardActions from "../store/actions/playerCard-action";

const ProfilePage = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerCardActions.getPlayerCardInfo(id));
  }, [dispatch]);

  const playerCard = useSelector(
    (state) => state.playerStore.selectedPlayerCard
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
        <Text>{name}</Text>
        <Text>{position}</Text>
        <Text>{overall}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default ProfilePage;
