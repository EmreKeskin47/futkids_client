import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";
import { TouchableOpacity } from "react-native-gesture-handler";

const PlayerList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerCardActions.fetchPlayerCards());
    dispatch(playerAttributeActions.getAllAttributes());
  }, [dispatch]);

  const playerCards = useSelector((state) => state.playerCardStore.playerCards);

  const attrList = useSelector(
    (state) => state.playerAttributeStore.playerAttributes
  );

  const renderItem = ({ item }) => {
    if (attrList) {
      var attr = attrList.filter((attr) => {
        return attr.playerID === item.playerID;
      });
      attr = attr[0];
    }
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigate(item.playerID);
        }}
      >
        <PlayerCard
          playerID={item.playerID}
          id={item.id}
          playerName={item.name}
          playerPosition={item.position}
          overall={item.overall}
          attr={attr}
        />
      </TouchableOpacity>
    );
  };

  if (playerCards.length === 0 || !attrList) {
    return (
      <View style={styles.noPlayer}>
        <Text>No player cards exist</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={playerCards}
          extraData={attrList}
          keyExtractor={(item) => {
            return item.playerID;
          }}
          renderItem={renderItem}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noPlayer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PlayerList;
