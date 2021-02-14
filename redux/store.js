import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import playerCardReducer from "./reducers/playerCard-reducer";
import playerAttributeReducer from "./reducers/playerAttribute-reducer";
import playerStatisticsReducer from "./reducers/playerStatistics-reducer";

const rootReducer = combineReducers({
    playerCardStore: playerCardReducer,
    playerAttributeStore: playerAttributeReducer,
    playerStatisticsStore: playerStatisticsReducer,
});

const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));
export default createStore(rootReducer, middleware);
