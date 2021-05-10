import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import * as firebase from "firebase";
import AnimatedTypeWriter from "react-native-animated-typewriter";

const ForgotPassword = (props) => {
    const [email, setEmail] = useState("");

    const onResetPasswordPress = () => {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(
                () => {
                    Alert.alert("Password reset email has been sent.");
                },
                (error) => {
                    console.log(error.message);
                }
            );
    };

    const onBackToLoginPress = () => {
        props.navigation.navigate("Login");
    };

    return (
        <ImageBackground
            source={require("../../assets/messi2.jpeg")}
            style={styles.image}
        >
            <View style={styles.container}>
                <Text style={styles.header}>futkids</Text>

                {/* <Image
          source={require("../../assets/ball-bouncing.gif")}
          style={styles.gif}
        /> */}

                <AnimatedTypeWriter
                    text={"Şifrenizi Yenileyin :"}
                    containerStyle={styles.textContainer}
                    style={styles.text}
                    timeBetweenLetter={80}
                />
                <View style={styles.form}>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Mail"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        autoCapitalize="none"
                    />
                    <View style={styles.secondaryActions}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onBackToLoginPress}
                        >
                            <Text style={styles.buttonText}>Giriş Yap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onResetPasswordPress}
                        >
                            <Text style={styles.buttonText}>
                                Şifremi Yenile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 60,
        color: "white",
        paddingBottom: 20,
    },
    form: {
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        borderRadius: 7,
        alignItems: "center",
        padding: 20,
    },
    formInput: {
        padding: 10,
        margin: 20,
        width: 200,
        borderRadius: 5,
        backgroundColor: "white",
        opacity: 0.8,
    },
    button: {
        margin: 20,
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
    },
    textContainer: {
        margin: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    text: {
        color: "white",
        fontSize: 25,
        margin: 10,
    },
    secondaryActions: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    gif: {
        width: 100,
        height: 100,
    },
});

export default ForgotPassword;
