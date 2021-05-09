import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    // setFirstName("");
    // setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account </Text>

        <ScrollView onBlur={Keyboard.dismiss}>
          {/* <TextInput
            style={styles.textInput}
            placeholder="First name*"
            value={firstName}
            onChangeText={(name) => setFirstName(name)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last name"
            value={lastName}
            onChangeText={(name) => setLastName(name)}
          /> */}

          <TextInput
            style={styles.textInput}
            placeholder="Enter your email*"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter your password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Retype your password to confirm*"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.inlineText}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
});

export default SignUp;
