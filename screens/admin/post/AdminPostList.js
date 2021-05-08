import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import HeaderButton from "../../../components/HeaderButton";
import PostList from "../../../components/PostList";
import * as postActions from "../../../redux/actions/post-actions";

const AdminPostList = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.fetchPosts());
    });
    const postSelected = (item) => {
        props.navigation.push("Post Details", {
            id: item.id,
            tit: item.title,
            img: item.image,
            description: item.description,
        });
    };

    return (
        <TouchableOpacity>
            <PostList onPress={postSelected} />
        </TouchableOpacity>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "Haber Listesi",
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
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="New"
                    iconName={
                        Platform.OS === "android"
                            ? "add-circle"
                            : "ios-add-circle"
                    }
                    onPress={() => {
                        navData.navigation.push("Create Post");
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
        width: "100%",
    },
    text: {
        paddingVertical: 25,
    },
});
export default AdminPostList;
