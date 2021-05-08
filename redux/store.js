import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import playerCardReducer from "./reducers/playerCard-reducer";
import playerAttributeReducer from "./reducers/playerAttribute-reducer";
import playerStatisticsReducer from "./reducers/playerStatistics-reducer";
import playerReducer from "./reducers/player-reducer";
import postReducer from "./reducers/post-reducer";

const rootReducer = combineReducers({
    playerCardStore: playerCardReducer,
    playerAttributeStore: playerAttributeReducer,
    playerStatisticsStore: playerStatisticsReducer,
    playerStore: playerReducer,
    postStore: postReducer,
});

const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));
export default createStore(rootReducer, middleware);
