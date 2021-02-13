import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import VoteCard from "../components/VoteCard";

const VotePage = () => {
  const clicked = () =>
    Alert.alert(
      "Oy verdiginiz icin tesekkur ederiz",
      "Oyuncularimiz her hafta cok calisiyorlar ve sizin geri bildirimlerinizle daha iyi noktlara geleceklerine inaniyoruz.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Yas araligini girdiginiz oyuncular asagida goruntulenecektir.{"\n"}
        {"\n"}
        Bu hafta dikkatinizi ceken oyuncunun uzerine tiklayip, asagidaki gonder
        butonuna basarak, oyuncuya oy verebilirsiniz.
      </Text>
      <DropDownPicker
        items={[
          { label: "1999-2001", value: "1996-2001" },
          { label: "2002-2004", value: "2002-2004" },
          { label: "2005-2007", value: "2005-2007" },
          { label: "2008-20010", value: "2008-20010" },
        ]}
        defaultIndex={0}
        containerStyle={{ height: 50 }}
        onChangeItem={(item) => console.log(item.label, item.value)}
        placeholder={"Lutfen bir yas araligi girin"}
        style={styles.dropdown}
      />
      <VoteCard style={styles.card} />
      <TouchableOpacity onPress={clicked} style={styles.btn}>
        <Text style={styles.btnText}>Gonder</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: 40,
    margin: 20,
    alignSelf: "center",
    color: "black",
    opacity: 0.8,
    fontWeight: "bold",
    fontSize: 20,
  },
  dropdown: {
    marginHorizontal: 20,
  },
  card: {},
  btn: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#6e3b6e",
    height: 50,
    width: 100,
    justifyContent: "center",
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    color: "white",
  },
});

export default VotePage;
