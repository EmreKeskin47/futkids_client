import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import AnimatedTypeWriter from "react-native-animated-typewriter";

const SignUp = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const emptyState = () => {
    //   // setFirstName("");
    //   // setLastName("");
    //   setEmail("");
    //   setPassword("");
    //   setConfirmPassword("");
    // };

    const onHaveAnAccountPress = () => {
        props.navigation.navigate("Login");
    };

    const onSignUpPress = () => {
        if (password != confirmPassword) {
            Alert.alert("Passwords do not match!");
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(
                () => {
                    console.log(email + " has successfully registered.");
                },
                (error) => {
                    Alert.alert(error.message);
                }
            );
    };

    return (
        <ImageBackground
            source={require("../../assets/signup-bg.jpeg")}
            style={styles.image}
        >
            <View style={styles.container}>
                <Text style={styles.header}>futkids</Text>

                {/* <Image
          source={require("../../assets/ball-bouncing.gif")}
          style={styles.gif}
        /> */}

                <AnimatedTypeWriter
                    text={"Hesap Açın :"}
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
                    <TextInput
                        style={styles.formInput}
                        placeholder="Şifre"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Şifre Tekrar"
                        value={confirmPassword}
                        onChangeText={(confirmPassword) =>
                            setConfirmPassword(confirmPassword)
                        }
                        secureTextEntry={true}
                    />
                    <View style={styles.secondaryActions}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onSignUpPress}
                        >
                            <Text style={styles.buttonText}>Kaydol</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onHaveAnAccountPress}
                        >
                            <Text style={styles.buttonText}>
                                Hesabınız Var Mı
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

export default SignUp;
