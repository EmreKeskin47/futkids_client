import React, { useState, useEffect } from "react";
import { View, Alert, Button, Image, Platform, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import Colors from "../../../constants/Colors";
import * as postActions from "../../../redux/actions/post-actions";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import { Post } from "../../../models/Post";

const PostDetailsPage = ({ route, navigation }) => {
    const { id, tit, img, description } = route.params;

    const [title, setTitle] = useState(tit);
    const [desc, setDesc] = useState(description);
    const [image, setImage] = useState(img);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "Resim eklemek için uygulamaya kamera erişim izni verilmeli"
                    );
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const deletePost = async () => {
        postActions.deleteImageFromStorage(img);
        dispatch(postActions.deletePost(id));
        Alert.alert("Başarıyla silindi");
        navigation.push("Post List");
    };

    const updatePost = async () => {
        let newPost = new Post(id, desc, image, title, null);
        dispatch(postActions.updatePost(newPost));
        Alert.alert("Başarıyla güncellendi");
        navigation.push("Post List");
    };

    return (
        <ScrollView style={styles.root}>
            <View style={styles.container}>
                <TextInput
                    label="Haber Başlığı"
                    style={styles.inputStyle}
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />
                <TextInput
                    label="Haber İçeriği"
                    style={styles.inputStyle}
                    onChangeText={(text) => setDesc(text)}
                    value={desc}
                    multiline={true}
                />
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        title="Haber ile ilişkilendirilmiş resmi galeriden başka bir resimle değiştirmek için tıklayınız"
                        color="#fff"
                        onPress={pickImage}
                    />
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{ width: 250, height: 250 }}
                        />
                    )}
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    title="Haberi Düzenle"
                    color="#fff"
                    disabled={!title || !desc}
                    onPress={() => {
                        updatePost(title, desc);
                    }}
                />
                <Button
                    title="Haberi Kaldır"
                    color="#fff"
                    disabled={!title || !desc}
                    onPress={() => {
                        deletePost(title, desc);
                    }}
                />
            </View>
        </ScrollView>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "Haber Düzenle",
    };
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.primary,
    },
    inputStyle: {
        marginVertical: 15,
        width: 350,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
    },

    formLabel: {
        fontSize: 30,
        margin: 30,
        color: "#fff",
    },
    button: {
        paddingBottom: 20,
        marginVertical: 25,
    },
});

export default PostDetailsPage;
