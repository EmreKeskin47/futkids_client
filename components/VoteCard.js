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
  },
  {
    id: "2",
    title: "Arman",
  },
  {
    id: "3",
    title: "Emre",
  },
  {
    id: "4",
    title: "Ati",
  },
  {
    id: "5",
    title: "Kardo",
  },
  {
    id: "6",
    title: "Tex",
  },
  {
    id: "7",
    title: "Arthur",
  },
  {
    id: "8",
    title: "Ellie",
  },
  {
    id: "9",
    title: "Joel",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
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
    fontSize: 20,
  },
});

export default VoteCard;
