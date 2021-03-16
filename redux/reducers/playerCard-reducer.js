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
            state.playerCards = action.playerCards;
            return state;
        case ADD_PLAYER_CARD:
            state.playerCards = state.playerCards.concat(action.newPlayerCard);
            return state;

        case DELETE_PLAYER_CARD:
            state.playerCards = state.playerCards.filter(
                (player) => player.id !== action.pid
            );
            return state;

        case UPDATE_PLAYER_CARD:
            const playerIndex = state.playerCards.findIndex(
                (player) => player.id === action.pid
            );
            const updatedPlayerCard = new PlayerCard(
                action.playerCardData._id,
                action.playerCardData.name,
                action.playerCardData.playerID,
                action.playerCardData.position,
                action.playerCardData.overall,
                action.playerCardData.image,
                action.playerCardData.kitNumber,
                action.playerCardData.foot,
                action.playerCardData.age
            );
            state.playerCards[playerIndex] = updatedPlayerCard;
            return state;
        case GET_PLAYER_CARD:
            state.selectedPlayerCard = action.playerCardData;
            return state;
    }
    return state;
};
