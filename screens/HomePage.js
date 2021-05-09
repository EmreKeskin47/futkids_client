import React, { useEffect, useState } from "react";
import { View, Text, Platform, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import * as firebase from "firebase";

const HomePage = () => {
  const [user, setUser] = useState();

  const currentUser = firebase.auth().currentUser;

  useEffect(() => {});

  const Logout = () => {
    console.log(currentUser.email + " has logged out.");
    firebase.auth().signOut();
  };

  return (
    <View style={styles.root}>
      <Text>{"Hosgeldin " + currentUser.email}</Text>
      <Button onPress={Logout} title="Log Out" />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Ana Sayfa",
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
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomePage;
