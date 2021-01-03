import Player from "../models/Player";
import {
    ADD_PLAYER,
    DELETE_PLAYER,
    FETCH_PLAYER,
    GET_PLAYER,
    UPDATE_PLAYER,
} from "./players-action";

const initialState = {
    players: [],
    selectedPlayer: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYER:
            return { players: action.players };
        case ADD_PLAYER:
            const newPlayer = new Player(
                action.playerData.id,
                action.playerData.playerName,
                action.playerData.playerPosition,
                action.playerData.overall
            );
            return { players: state.players.concat(newPlayer) };
        case DELETE_PLAYER:
            return {
                ...state,
                players: state.players.filter(
                    (player) => player.id !== action.pid
                ),
            };
        case UPDATE_PLAYER:
            const playerIndex = state.players.findIndex(
                (player) => player.id === action.pid
            );
            const updatedPlayer = new Player(
                action.pid,
                action.playerData.playerName,
                action.playerData.playerPosition,
                action.playerData.overall
            );
            state.players[playerIndex] = updatedPlayer;
            return state;
        case GET_PLAYER:
            state.selectedPlayer = action.playerData;
            return state;
    }
    return state;
};
