import React, { useEffect } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import PostList from "../components/PostList";
import * as postActions from "../redux/actions/post-actions";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.fetchPosts());
    });
    const postPressed = (item) => {
        console.log("homepage post pressed - expand");
    };
    return (
        <View>
            <PostList onPress={postPressed} />
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
                    iconName={
                        Platform.OS === "android" ? "md-menu" : "ios-menu"
                    }
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
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});
export default HomePage;
