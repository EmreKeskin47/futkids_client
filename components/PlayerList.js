import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import * as playerCardActions from "../redux/actions/playerCard-action";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";

const PlayerList = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState("");
  const [age, setAge] = useState(0);
  const [sage, setSage] = useState(0);
  const [name, setName] = useState("");

  const attrList = useSelector(
    (state) => state.playerAttributeStore.playerAttributes
  );
  var playerCards = useSelector((state) => state.playerCardStore.playerCards);

  //Get the current year
  const year = new Date().getFullYear();

  const getPlayerListOnRefresh = () => {
    dispatch(playerAttributeActions.getAllAttributes())
      .then(dispatch(playerCardActions.fetchPlayerCards()))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  const onRefresh = () => {
    setIsLoading(true);
    getPlayerListOnRefresh();
  };

  const listData = () => {
    position
              ? playerCards.filter(
                  (item) =>
                    item.name.toLowerCase().includes(name) &&
                    item.position == position
                )
              : playerCards.filter((item) =>
                  item.name.toLowerCase().includes(name)
                )
  }

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
          dispatch(playerAttributeActions.fetchPlayerAttributes(item.playerID));
          props.navigate(item.playerID);
        }}
      >
        <PlayerCard cardData={item} attr={attr} />
      </TouchableOpacity>
    );
  };
  if (isLoading) {
    return (
      <View style={styles.noPlayer}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (playerCards.length === 0) {
    return (
      <View style={styles.noPlayer}>
        <Text>No player cards exist</Text>
      </View>
    );
  } else {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.searchField}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={name}
            onChangeText={(text) => {
              setName(text.toLowerCase());
            }}
            placeholder="İsim Ara"
            style={{
              backgroundColor: "#fff",
            }}
          />
        </View>
        <FlatList
          data={
            // position
            //   ? playerCards.filter(
            //       (item) =>
            //         item.name.toLowerCase().includes(name) &&
            //         item.position == position
            //     )
            //   : playerCards.filter((item) =>
            //       item.name.toLowerCase().includes(name)
            //     )
            listData
          }
          extraData={attrList}
          keyExtractor={(item) => {
            return item.playerID;
          }}
          renderItem={renderItem}
          onRefresh={() => onRefresh()}
          refreshing={isLoading}
        />
        {/* <View style={styles.buttons}>
        <TouchableOpacity
            style={{
              marginTop: age == (year - 2007 || year - 2008) ? -5 : 0,
              height: 40,
            }}
            onPress={() => {
              setAge(year - 2007);
              setSage(year - 2008);
              console.log(age);
              console.log(sage);
            }}
          >
            <Text
              style={{
                color: age == (year - 2007 || year - 2008) ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              07/08
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: age == (year - 2009 || year - 2010) ? -5 : 0,
              height: 40,
            }}
            onPress={() => {
              setAge(year - 2009);
              setSage(year - 2010);
              console.log(age);
              console.log(sage);
            }}
          >
            <Text
              style={{
                color: age == (year - 2009 || year - 2010) ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              09/10
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: age == (year - 2011 || year - 2012) ? -5 : 0,
              height: 40,
            }}
            onPress={() => {
              setAge(year - 2011);
              setSage(year - 2012);
              console.log(age);
              console.log(sage);
            }}
          >
            <Text
              style={{
                color: age == (year - 2011 || year - 2012) ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              11/12
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: age == (year - 2013 || year - 2014) ? -5 : 0,
              height: 40,
            }}
            onPress={() => {
              setAge(year - 2013);
              setSage(year - 2014);
              console.log(age);
              console.log(sage);
            }}
          >
            <Text
              style={{
                color: age == (year - 2013 || year - 2014) ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              13/14
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: age == (year - 2015 || year - 2016) ? -5 : 0,
              height: 40,
            }}
            onPress={() => {
              setAge(year - 2015);
              setSage(year - 2016);
              console.log(age);
              console.log(sage);
            }}
          >
            <Text
              style={{
                color: age == (year - 2015 || year - 2016) ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              15/16
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: age == 0 ? -5 : 0,
              height: 40,
            }}
            size={20}
            onPress={() => {
                setAge(0);
                setSage(0);
                console.log(age);
                console.log(sage);
              }
            }
          >
            <Text
              style={{
                color: age == 0 ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              HEPSİ
            </Text>
          </TouchableOpacity>
        </View> */}

         <View style={styles.buttons}>
          <TouchableOpacity
            style={{
              marginTop: position == "GK" ? -5 : 0,
              height: 40,
            }}
            onPress={() => setPosition("GK")}
          >
            <Text
              style={{
                color: position == "GK" ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              GK
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: position == "DEF" ? -5 : 0,
              height: 40,
            }}
            onPress={() => setPosition("DEF")}
          >
            <Text
              style={{
                color: position == "DEF" ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              DEF
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: position == "MID" ? -5 : 0,
              height: 40,
            }}
            onPress={() => {setPosition("MID")}}
          >
            <Text
              style={{
                color: position == "MID" ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              MID
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: position == "ATT" ? -5 : 0,
              height: 40,
            }}
            onPress={() => setPosition("ATT")}
          >
            <Text
              style={{
                color: position == "ATT" ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              ATT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: position == "" ? -5 : 0,
              height: 40,
            }}
            size={20}
            onPress={() => setPosition("")}
          >
            <Text
              style={{
                color: position == "" ? Colors.accent : Colors.primary,
                height: 40,
              }}
            >
              HEPSİ
            </Text>
          </TouchableOpacity>
        </View> 
      </KeyboardAvoidingView>
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
  dropdown: {
    marginHorizontal: 20,
    fontFamily: "Avenir-Medium",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    paddingBottom: 0,
  },
  searchField: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    height: 40,
  },
});

export default PlayerList;
