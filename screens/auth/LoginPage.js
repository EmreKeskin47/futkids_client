import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import AnimatedTypeWriter from "react-native-animated-typewriter";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {},
        (error) => {
          Alert.alert(error.message);
        }
      );
  };

  const onCreateAccountPress = () => {
    props.navigation.navigate("SignUp");
  };

  const onForgotPasswordPress = () => {
    props.navigation.navigate("ForgotPassword");
  };

  return (
    <ImageBackground
      source={require("../../assets/loginBackground.jpg")}
      style={styles.image}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.header}>futkids</Text>

        <Image
          source={require("../../assets/ball-bouncing.gif")}
          style={styles.gif}
        />

        <AnimatedTypeWriter
          text={"Hesabınıza Giriş Yapın :"}
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
            autoCorrect={false}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Şifre"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={onLoginPress}>
            <Text style={styles.buttonText}>Giriş</Text>
          </TouchableOpacity>
          <View style={styles.secondaryActions}>
            <TouchableOpacity
              style={styles.button}
              onPress={onCreateAccountPress}
            >
              <Text style={styles.buttonText}>Hesap Açın</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={onForgotPasswordPress}
            >
              <Text style={styles.buttonText}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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

export default Login;
