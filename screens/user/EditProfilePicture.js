import React, { useState, useEffect } from "react";
import { View, Alert, Button, Image, Platform, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as postActions from "../../redux/actions/userProfile-actions";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";

const EditProfilePicture = (props) => {
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
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
            .child("players/" + imageName);
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
        <View style={styles.root}>
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        title="Profil resminizi galeriden seçmek için tıklayınız"
                        color="#fff"
                        onPress={pickImage}
                    />
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{ width: 350, height: 350 }}
                        />
                    )}
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    title="Resmi Kaydet"
                    color="#fff"
                    disabled={!image}
                    onPress={() => {
                        onSave();
                    }}
                />
            </View>
        </View>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "Resim Güncelle",
    };
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.primary,
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

export default EditProfilePicture;
