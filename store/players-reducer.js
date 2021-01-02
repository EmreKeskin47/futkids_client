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
                action.playerData.id,
                action.playerData.playerName,
                action.playerData.playerPosition,
                action.playerData.overall
            );
            console.log("new Player to add", newPlayer);
            return { players: state.players.concat(newPlayer) };
    }
    return state;
};
