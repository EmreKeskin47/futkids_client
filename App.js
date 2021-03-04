import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./redux/store";

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};
export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
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
            <AppNavigator />
        </Provider>
    );
}
