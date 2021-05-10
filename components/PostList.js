import React, { useState, useCallback } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
} from "native-base";
import * as postActions from "../redux/actions/post-actions";

const PostList = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postStore.posts);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(postActions.fetchPosts()).then(() => setRefreshing(false));
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.onPress(item)}>
                <Content key={item}>
                    <Card style={styles.card}>
                        <CardItem>
                            <Left>
                                <Thumbnail
                                    source={{
                                        uri: "https://picsum.photos/700",
                                    }}
                                />
                                <Body>
                                    <Text>{item.title}</Text>
                                    <Text note>{item.date}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image
                                    source={{
                                        uri: item.image,
                                    }}
                                    style={styles.image}
                                />
                                <Text style={styles.text}>
                                    {item.description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </TouchableOpacity>
        );
    };

    return (
        <TouchableOpacity>
            <FlatList
                data={posts}
                keyExtractor={(item) => {
                    return item.title;
                }}
                renderItem={renderItem}
                onRefresh={() => onRefresh()}
                refreshing={refreshing}
            />
        </TouchableOpacity>
    );
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

    image: {
        height: 250,
        width: "95%",
        flex: 1,
    },
    card: { flex: 1 },
});
export default PostList;
