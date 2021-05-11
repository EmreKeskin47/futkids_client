import React, { useState, useEffect } from "react";
import { View, Alert, Button, Image, Platform, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import * as playerProfileActions from "../../redux/actions/userProfile-actions";

const EditProfilePicture = (props) => {
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    var playerID = useSelector(
        (state) => state.playerProfileStore.user.playerID
    );

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
    playerProfileActions.updatePlayerImage(playerID);

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

    const onSave = () => {
        uploadImage(image, playerID)
            .then(() => {
                dispatch(playerProfileActions.updatePlayerImage(playerID));
                Alert.alert("Başarıyla kaydedildi");
                props.navigation.goBack();
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
