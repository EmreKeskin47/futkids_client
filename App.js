import React from "react";
import { DrawerNavigation } from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import playersReducer from "./store/players-reducer";

const rootReducer = combineReducers({
    playerStore: playersReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <Provider store={store}>
            <DrawerNavigation />
        </Provider>
    );
}
