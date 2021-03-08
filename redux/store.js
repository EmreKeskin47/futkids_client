import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import playerCardReducer from "./reducers/playerCard-reducer";
import playerAttributeReducer from "./reducers/playerAttribute-reducer";
import playerStatisticsReducer from "./reducers/playerStatistics-reducer";
import playerDetailsReducer from "./reducers/playerDetails-reducer";
import playerReducer from "./reducers/player-reducer";

const rootReducer = combineReducers({
    playerCardStore: playerCardReducer,
    playerAttributeStore: playerAttributeReducer,
    playerStatisticsStore: playerStatisticsReducer,
    playerDetailsStore: playerDetailsReducer,
    playerStore: playerReducer,
});

const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));
export default createStore(rootReducer, middleware);
