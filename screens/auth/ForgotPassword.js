import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";

const ForgotPassword = ({ navigation }) => {
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
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in to your account:</Text>

      <TextInput
        style={styles.formInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={onResetPasswordPress}>
        <Text style={styles.buttonText}>Sumbit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onBackToLoginPress}>
        <Text style={styles.buttonText}>Back To Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ForgotPassword;
