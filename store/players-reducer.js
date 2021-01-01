import Player from "../models/Player";
import { ADD_PLAYER, FETCH_PLAYER } from "./players-action";

const initialState = {
    players: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYER:
            return { players: action.players };
        case ADD_PLAYER:
            const newPlayer = new Player(
                action.playerData.playerName,
                action.playerData.playerPosition,
                action.playerData.overall
            );
            return { players: state.players.concat(newPlayer) };
    }
    return state;
};
