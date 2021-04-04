import {
    CREATE_PLAYER,
    DELETE_PLAYER,
    FETCH_PLAYERS,
    GET_PLAYER,
    UPDATE_PLAYER,
} from "../actions/player-actions";

const initialState = {
    players: [],
    selectedPlayerID: "",
    selectedPlayer: {},
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
        case GET_PLAYER:
            state.selectedPlayer = action.playerData;
            return state;
        case UPDATE_PLAYER:
            const playerIndex = state.players.findIndex(
                (player) => player.id === action.pid
            );
            state.players[playerIndex] = action.PlayerData;
            return state;
    }
    return state;
};
