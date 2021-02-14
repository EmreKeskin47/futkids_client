import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import playerCardReducer from "./reducers/playerCard-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    playerCardStore: playerCardReducer,
});

const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));
export default createStore(rootReducer, middleware);
