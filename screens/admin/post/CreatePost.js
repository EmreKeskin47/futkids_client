import React, { useState, useEffect } from "react";
import {
    View,
    Alert,
    Text,
    Button,
    Image,
    Platform,
    StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import Colors from "../../../constants/Colors";
import * as postActions from "../../../redux/actions/post-actions";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import { ScrollView } from "react-native";

const CreatePost = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
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

    const uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase
            .storage()
            .ref()
            .child("posts/" + imageName);
        return ref.put(blob);
    };

    const onSave = (title, desc) => {
        let url =
            "https://firebasestorage.googleapis.com/v0/b/futkids-client.appspot.com/o/posts%2F";
        let titleString = encodeURIComponent(title.trim());
        url = url.concat(titleString);
        url = url.concat("?alt=media");
        uploadImage(image, title)
            .then(() => {
                dispatch(postActions.createPost(title, desc, url));
                Alert.alert("Başarıyla oluşturuldu");
                props.navigation.navigate("Post List");
            })
            .catch((error) => {
                Alert.alert(error);
            });
    };

    return (
        <ScrollView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.formLabel}> Yeni Haber </Text>
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
                        title="İlişkili resmi galeriden seçmek için tıklayınız"
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
                    title="Haberi Kaydet"
                    color="#fff"
                    disabled={!title || !desc}
                    onPress={() => {
                        onSave(title, desc);
                    }}
                />
            </View>
        </ScrollView>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "Haber Oluştur",
    };
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.primary,
    },
    inputStyle: {
        marginTop: 10,
        marginBottom: 10,
        width: 300,
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
        paddingBottom: 10,
    },
});

export default CreatePost;
