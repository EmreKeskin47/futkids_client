import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { View, Text, Platform, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { render } from "react-dom";

const LiveTvPage = () => {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{
        uri: "http://192.168.1.12.:5080/LiveApp/play.html?name=stream1",
      }}
    />
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
