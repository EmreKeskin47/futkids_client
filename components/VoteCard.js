import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Flatlist,
} from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import { FlatList } from "react-native-gesture-handler";

const DATA = [
  {
    id: "1",
    title: "Arda",
    position: "GK",
  },
  {
    id: "2",
    title: "Arman",
    position: "SLK",
  },
  {
    id: "3",
    title: "Emre",
    position: "SNT",
  },
  {
    id: "4",
    title: "Ati",
    position: "SLB",
  },
  {
    id: "5",
    title: "Kardo",
    position: "MOO",
  },
  {
    id: "6",
    title: "Tex",
    position: "MO",
  },
  {
    id: "7",
    title: "Arthur",
    position: "GK",
  },
  {
    id: "8",
    title: "Ellie",
    position: "SRB",
  },
  {
    id: "9",
    title: "Joel",
    position: "SLB",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.title}>
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.position}>{item.position}</Text>
    </View>
  </TouchableOpacity>
);

const VoteCard = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  title: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    fontFamily: "Avenir-Medium",
  },
  position: {
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "red",
  },
});

export default VoteCard;
