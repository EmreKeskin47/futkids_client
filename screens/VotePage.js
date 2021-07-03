import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import VoteCard from "../components/VoteCard";
import { weeklyVote } from "../redux/actions/playerCard-action";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from "../constants/Colors";
import * as firebase from "firebase";
import { db } from "../constants/firebase/config";

const VotePage = () => {
  const [position, setPosition] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState();
  const dispatch = useDispatch();

  const playerSelected = (id) => {
    setSelectedPlayer(id);
  };

  const voteForPlayer = () => {
    dispatch(weeklyVote(selectedPlayer, 1));
    Alert.alert(
      "Oy verdiginiz icin tesekkur ederiz",
      "Oyuncularimiz her hafta cok calisiyorlar ve sizin geri bildirimlerinizle daha iyi noktalara geleceklerine inaniyoruz.",
      [{ text: "OK" }],
      { cancelable: false }
    );
  };

  //Bu metodu yazan laz
  const clicked = () => {
    const email = firebase.auth().currentUser.email;
    console.log(email);
    const vote = db.collection("oy");
    // vote.doc(email).set({
    //   email: email,
    //   att: position == "ATT",
    //   mid: position == "MID",
    //   def: position == "DEF",
    //   gk: position == "GK",
    // });
    // voteForPlayer();

    vote
      .doc(email)
      .get()
      .then((item) => {
        if (item) {
          if (
            (item.data().att && position == "ATT") ||
            (item.data().mid && position == "MID") ||
            (item.data().def && position == "DEF") ||
            (item.data().gk && position == "GK")
          ) {
            Alert.alert(
              "Bu pozisyonda bir oyuncuya zaten oy verdiniz",
              "Daha da veremen",
              [{ text: "OK" }],
              { cancelable: false }
            );
          } else {
            vote.doc(email).set({
              email: email,
              att: item.data().att ? true : position == "ATT",
              mid: item.data().mid ? true : position == "MID",
              def: item.data().def ? true : position == "DEF",
              gk: item.data().gk ? true : position == "GK",
            });
            voteForPlayer();
          }
        } else {
          vote.doc(email).set({
            email: email,
            att: position == "ATT",
            mid: position == "MID",
            def: position == "DEF",
            gk: position == "GK",
          });
          voteForPlayer();
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Yaş aralığını girdiğiniz oyuncular aşağıda görüntülenecektir.
        {"\n"}
        {"\n"}
        Bu hafta dikkatinizi çeken oyuncunun üzerine tıklayıp, aşağıdaki gönder
        butonuna basarak, oyuncuya oy verebilirsiniz.
      </Text>
      <DropDownPicker
        items={[
          { label: "GK", value: "GK" },
          { label: "DEF", value: "DEF" },
          { label: "MID", value: "MID" },
          { label: "ATT", value: "ATT" },
        ]}
        defaultIndex={0}
        containerStyle={{ height: 50 }}
        onChangeItem={(item) => setPosition(item.value)}
        placeholder={"Lutfen bir pozisyon seçiniz"}
        style={styles.dropdown}
      />
      <VoteCard
        playerSelected={playerSelected}
        position={position}
        style={styles.card}
      />
      <TouchableOpacity onPress={clicked} style={styles.btn}>
        <Text style={styles.btnText}>Gönder</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Oy Ver",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
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
    fontSize: RFPercentage(2),
    fontFamily: "Avenir-Medium",
  },
  dropdown: {
    marginHorizontal: 20,
    fontFamily: "Avenir-Medium",
  },
  btn: {
    alignSelf: "center",
    backgroundColor: Colors.primary,
    margin: 15,
    height: 50,
    width: 150,
    justifyContent: "center",
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: RFPercentage(3),
    alignSelf: "center",
    color: "white",
    fontFamily: "Avenir-Medium",
  },
});

export default VotePage;
