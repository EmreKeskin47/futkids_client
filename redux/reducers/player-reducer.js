import {
    CREATE_PLAYER,
    DELETE_PLAYER,
    FETCH_PLAYERS,
} from "../actions/player-actions";

const initialState = {
    players: [],
    selectedPlayerID: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYERS:
            state.players = action.players;
            return state;
        case CREATE_PLAYER:
            return { players: state.players.concat(action.newPlayer) };
        case DELETE_PLAYER:
            return {
                ...state,
                players: state.players.filter(
                    (player) => player.id !== action.pid
                ),
            };
    }
    return state;
};
