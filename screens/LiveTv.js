import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { View, Text, Platform, StyleSheet } from "react-native";

const LiveTvPage = () => {
  return (
    <View style={styles.root}>
      <Text>Live Tv</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Canlı Yayın",
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

export default LiveTvPage;
