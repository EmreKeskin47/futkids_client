import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AdminPage, {
  screenOptions as AdminScreenOptions,
} from "../screens/admin/AdminPage";
import HomePage, {
  screenOptions as HomeScreenOptions,
} from "../screens/HomePage";
import PlayerDetailsPage, {
  screenOptions as PlayerDetailScreenOptions,
} from "../screens/admin/PlayerDetailsPage";
import PlayerStaticsForm, {
  screenOptions as PlayerStaticsFormScreenOptions,
} from "../screens/admin/PlayerStaticsForm";
import NewPlayerPage from "../screens/admin/NewPlayerPage";
import StadiumTest, {
  screenOptions as StadiumTestScreenOptions,
} from "../screens/StadiumTest";
import UserPage, {
  screenOptions as UserScreenOptions,
} from "../screens/user/UserPage";
import PlayerProfilePage from "../screens/user/PlayerProfile";
import VotePage, {
  screenOptions as VotePageScreenOptions,
} from "../screens/VotePage";
import LiveTvPage, {
  screenOptions as LiveTvScreenOptions,
} from "../screens/LiveTv";
import TopScorerPage from "../screens/TopScorerTab";
import TopAsistPage from "../screens/TopAsistPage";
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import CreatePost, {
  screenOptions as CreatePostScreenOptions,
} from "../screens/admin/post/CreatePost";
import AdminPostList, {
  screenOptions as PostListScreenOptions,
} from "../screens/admin/post/AdminPostList";
import PostDetailsPage, {
  screenOptions as PostDetailsScreenOptions,
} from "../screens/admin/post/PostDetailsPage";
import MyProfile, {
  screenOptions as MyProfileScreenOptions,
} from "../screens/user/Profile";
import EditProfilePicture, {
  screenOptions as ProfilePictureScreenOptions,
} from "../screens/user/EditProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import * as playerProfileActions from "../redux/actions/userProfile-actions";
const GradientHeader = (props) => (
  <LinearGradient
    colors={["#e0e0eb", "#404040"]}
    style={{ flex: 1 }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
);

const defaultNavOptions = {
  headerBackground: GradientHeader,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : "white",
};

const Tab = createMaterialBottomTabNavigator();
function HomePageTabNavigator() {
  const styles = StyleSheet.create({
    root: {
      padding: 20,
    },
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#C2185B"
      barStyle={{ backgroundColor: "#fff" }}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Anasayfa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Gol Krallığı"
        component={TopScorerPage}
        options={{
          tabBarLabel: "Gol Krallığı",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="soccer" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Asist Krallığı"
        component={TopAsistPage}
        options={{
          tabBarLabel: "Asist Krallığı",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const StadiumStackNavigator = createStackNavigator();
export const StadiumNavigator = () => {
  return (
    <StadiumStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <StadiumStackNavigator.Screen
        name="Stadium Page"
        component={StadiumTest}
        options={StadiumTestScreenOptions}
      />
    </StadiumStackNavigator.Navigator>
  );
};

const LiveTvStackNavigator = createStackNavigator();
export const LiveTvNavigator = () => {
  return (
    <LiveTvStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <LiveTvStackNavigator.Screen
        name="LiveTv Page"
        component={LiveTvPage}
        options={LiveTvScreenOptions}
      />
    </LiveTvStackNavigator.Navigator>
  );
};

const VoteStackNavigator = createStackNavigator();
export const VoteNavigator = () => {
  return (
    <VoteStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <VoteStackNavigator.Screen
        name="Vote Page"
        component={VotePage}
        options={VotePageScreenOptions}
      />
    </VoteStackNavigator.Navigator>
  );
};

const AdminStackNavigator = createStackNavigator();
export const PlayersAdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AdminStackNavigator.Screen
        name="Admin Page"
        component={AdminPage}
        options={AdminScreenOptions}
      />
      <AdminStackNavigator.Screen
        name="Player Details"
        component={PlayerDetailsPage}
        options={PlayerDetailScreenOptions}
      />
      <AdminStackNavigator.Screen
        name="Oyuncu İstatistikleri"
        component={PlayerStaticsForm}
        options={PlayerStaticsFormScreenOptions}
      />
      <AdminStackNavigator.Screen
        name="Yeni Oyuncu"
        component={NewPlayerPage}
      />
    </AdminStackNavigator.Navigator>
  );
};

const AdminPostStackNavigator = createStackNavigator();
export const PostsAdminNavigator = () => {
  return (
    <AdminPostStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AdminPostStackNavigator.Screen
        name="Post List"
        component={AdminPostList}
        options={PostListScreenOptions}
      />
      <AdminPostStackNavigator.Screen
        name="Create Post"
        component={CreatePost}
        options={CreatePostScreenOptions}
      />
      <AdminPostStackNavigator.Screen
        name="Post Details"
        component={PostDetailsPage}
        options={PostDetailsScreenOptions}
      />
    </AdminPostStackNavigator.Navigator>
  );
};

const HomeStackNavigator = createStackNavigator();
export const HomePageNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen
        name="Ana Sayfa"
        component={HomePageTabNavigator}
        options={HomeScreenOptions}
      />
    </HomeStackNavigator.Navigator>
  );
};

const UserStackNavigator = createStackNavigator();
export const UserNavigator = () => {
  return (
    <UserStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <UserStackNavigator.Screen
        name="Oyuncular"
        component={UserPage}
        options={UserScreenOptions}
      />
      <UserStackNavigator.Screen
        name="Oyuncu Profili"
        component={PlayerProfilePage}
      />
    </UserStackNavigator.Navigator>
  );
};

const UserProfileStackNavigator = createStackNavigator();
export const UserProfileNavigator = () => {
  return (
    <UserProfileStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <UserProfileStackNavigator.Screen
        name="Profilim"
        component={MyProfile}
        options={MyProfileScreenOptions}
      />
      <UserProfileStackNavigator.Screen
        name="Profil Resmi"
        component={EditProfilePicture}
        options={ProfilePictureScreenOptions}
      />
    </UserProfileStackNavigator.Navigator>
  );
};

const MenuDrawerNavigatorUser = createDrawerNavigator();
export const MenuNavigatorUser = () => {
  const dispatch = useDispatch();
  dispatch(playerProfileActions.getPlayer(firebase.auth().currentUser.email));
  var username = useSelector((state) => state.playerProfileStore.user.name);
  const Logout = () => {
    firebase.auth().signOut();
  };
  return (
    <MenuDrawerNavigatorUser.Navigator
      screenOptions={defaultNavOptions}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem label={username} style={styles.logout} /> */}
            <DrawerItem label="Çıkış" onPress={Logout} />
          </DrawerContentScrollView>
        );
      }}
    >
      {/* <MenuDrawerNavigator.Screen name="Giris" component={AuthNavigator} /> */}
      <MenuDrawerNavigatorUser.Screen
        name="Ana Sayfa"
        component={HomePageNavigator}
      />
      <MenuDrawerNavigatorUser.Screen
        name="Oyuncu Listesi"
        component={UserNavigator}
      />
      {/* <MenuDrawerNavigator.Screen name="Giriş" component={AuthNavigator} /> */}
      <MenuDrawerNavigatorUser.Screen
        name="Haftanın Takımı"
        component={StadiumNavigator}
      />
      <MenuDrawerNavigatorUser.Screen name="Oy Ver" component={VoteNavigator} />
      <MenuDrawerNavigatorUser.Screen
        name="Canlı Yayın"
        component={LiveTvNavigator}
      />
      <MenuDrawerNavigatorUser.Screen
        name="Profilim"
        component={UserProfileNavigator}
      />
    </MenuDrawerNavigatorUser.Navigator>
  );
};

const MenuDrawerNavigatorAdmin = createDrawerNavigator();
export const MenuNavigatorAdmin = () => {
  const dispatch = useDispatch();
  dispatch(playerProfileActions.getPlayer(firebase.auth().currentUser.email));
  var username = useSelector((state) => state.playerProfileStore.user.name);
  const Logout = () => {
    firebase.auth().signOut();
  };
  return (
    <MenuDrawerNavigatorAdmin.Navigator
      screenOptions={defaultNavOptions}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem label={username} style={styles.logout} /> */}
            <DrawerItem label="Çıkış" onPress={Logout} />
          </DrawerContentScrollView>
        );
      }}
    >
      {/* <MenuDrawerNavigator.Screen name="Giris" component={AuthNavigator} /> */}
      <MenuDrawerNavigatorAdmin.Screen
        name="Ana Sayfa"
        component={HomePageNavigator}
      />
      <MenuDrawerNavigatorAdmin.Screen
        name="Admin"
        component={PlayersAdminNavigator}
      />
      <MenuDrawerNavigatorAdmin.Screen
        name="Oyuncu Listesi"
        component={UserNavigator}
      />
      {/* <MenuDrawerNavigator.Screen name="Giriş" component={AuthNavigator} /> */}
      <MenuDrawerNavigatorAdmin.Screen
        name="Haftanın Takımı"
        component={StadiumNavigator}
      />
      <MenuDrawerNavigatorAdmin.Screen
        name="Oy Ver"
        component={VoteNavigator}
      />
      <MenuDrawerNavigatorAdmin.Screen
        name="Canlı Yayın"
        component={LiveTvNavigator}
      />
      <MenuDrawerNavigatorAdmin.Screen
        name="Admin Haber"
        component={PostsAdminNavigator}
      />
    </MenuDrawerNavigatorAdmin.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    marginTop: 50,
  },
});
