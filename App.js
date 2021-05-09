import React, { useState, Fragment } from "react";
import AppNavigator from "./navigation/AppNavigator";
import RootNavigation from "./navigation/RootNavigation";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as firebase from "firebase";
import ApiKeys from "./screens/firebase/config/ApiKeys";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (firebase.apps.length == 0) {
    firebase.initializeApp(ApiKeys.firebaseConfig);
  }

  onAuthStateChanged = (user) => {
    setIsAuthenticationReady(true);
    setIsAuthenticated(!!user);
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log(isAuthenticated);
    console.log(user);
  };

  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  if (!fontLoaded || !isAuthenticationReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={console.warn}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      {isAuthenticated ? <AppNavigator /> : <RootNavigation />}
      {/* <RootNavigation /> */}
    </Provider>
  );
}
