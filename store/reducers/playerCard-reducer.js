import PlayerCard from "../../models/PlayerCard";
import {
    ADD_PLAYER_CARD,
    DELETE_PLAYER_CARD,
    FETCH_PLAYER_CARD,
    GET_PLAYER_CARD,
    UPDATE_PLAYER_CARD,
} from "../actions/playerCard-action";

const initialState = {
    playerCards: [],
    selectedPlayerCard: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYER_CARD:
            return { playerCards: action.playerCards };
        case ADD_PLAYER_CARD:
            const newPlayerCard = new PlayerCard(
                action.playerData.id,
                action.playerData.name,
                action.playerData.position,
                action.playerData.overall,
                action.playerData.image,
                action.playerData.kitNumber,
                action.playerData.foot,
                action.playerData.age
            );
            return { playerCards: state.playerCards.concat(newPlayerCard) };
        case DELETE_PLAYER_CARD:
            return {
                ...state,
                playerCards: state.playerCards.filter(
                    (player) => player.id !== action.pid
                ),
            };
        case UPDATE_PLAYER_CARD:
            const playerIndex = state.playerCards.findIndex(
                (player) => player.id === action.pid
            );
            const updatedPlayerCard = new PlayerCard(
                action.pid,
                action.playerData.name,
                action.playerData.position,
                action.playerData.overall,
                action.playerData.image,
                action.playerData.kitNumber,
                action.playerData.foot,
                action.playerData.age
            );
            state.playerCards[playerIndex] = updatedPlayerCard;
            return state;
        case GET_PLAYER_CARD:
            state.selectedPlayerCard = action.playerCardData;
            return state;
    }
    return state;
};
