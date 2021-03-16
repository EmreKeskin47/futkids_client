import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import PlayerList from "../../components/PlayerList";

const AdminPage = (props) => {
  const navigateToDetail = (id) => {
    props.navigation.push("Player Details", { id: id });
  };

  return (
    <View style={styles.container}>
      <PlayerList navigate={navigateToDetail} />
    </View>
  );
};
export const screenOptions = (navData) => {
  return {
    headerTitle: "Admin Page ",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="New"
          iconName={Platform.OS === "android" ? "add-circle" : "ios-add-circle"}
          onPress={() => {
            navData.navigation.navigate("New Player");
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
});
export default AdminPage;
