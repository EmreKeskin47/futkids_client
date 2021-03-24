import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
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
import LoginPage, {
    screenOptions as LoginScreenOptions,
} from "../screens/LoginPage";
import LiveTvPage, {
    screenOptions as LiveTvScreenOptions,
} from "../screens/LiveTv";
import TopScorerPage from "../screens/TopScorerTab";
import TopAsistPage from "../screens/TopAsistPage";
import { Ionicons } from "@expo/vector-icons";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
        fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
        fontFamily: "open-sans",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const Tab = createBottomTabNavigator();
function HomePageTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarLabel: "Anasayfa",
                    tabBarIcon: () => (
                        <Ionicons name="home-sharp" size={28} color={"#000"} />
                    ),
                }}
            />
            <Tab.Screen
                name="Gol Krallığı"
                component={TopScorerPage}
                options={{
                    tabBarLabel: "Gol Krallığı",
                    tabBarIcon: () => (
                        <Ionicons
                            name="football-sharp"
                            size={28}
                            color={"#000"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Asist Krallığı"
                component={TopAsistPage}
                options={{
                    tabBarLabel: "Asist Krallığı",
                    tabBarIcon: () => (
                        <Ionicons
                            name="people-sharp"
                            size={28}
                            color={"#000"}
                        />
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

const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AuthStackNavigator.Screen
                name="Login Page"
                component={LoginPage}
                options={LoginScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    );
};

const MenuDrawerNavigator = createDrawerNavigator();
export const MenuNavigator = () => {
    return (
        <MenuDrawerNavigator.Navigator screenOptions={defaultNavOptions}>
            <MenuDrawerNavigator.Screen
                name="Ana Sayfa"
                component={HomePageNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Admin"
                component={PlayersAdminNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Kullanıcı"
                component={UserNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Giriş"
                component={AuthNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Haftanın Takımı"
                component={StadiumNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Oy Ver"
                component={VoteNavigator}
            />
            <MenuDrawerNavigator.Screen
                name="Canlı Yayın"
                component={LiveTvNavigator}
            />
        </MenuDrawerNavigator.Navigator>
    );
};
