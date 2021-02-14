import {
    CREATE_PLAYER_DETAILS,
    GET_DETAILS_OF_PLAYER,
    UPDATE_PLAYER_DETAILS,
} from "../actions/playerDetails-action";
import PlayerDetails from "../../models/PlayerDetails";

const initialState = {
    selectedPlayerDetails: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS_OF_PLAYER:
            return (state.selectedPlayerDetails = action.selectedPlayerDetails);
        case CREATE_PLAYER_DETAILS:
            const newDetails = new PlayerDetails(
                action.selectedPlayerDetails.playerID,
                action.selectedPlayerDetails.phone,
                action.selectedPlayerDetails.email,
                action.selectedPlayerDetails.height,
                action.selectedPlayerDetails.weight,
                action.selectedPlayerDetails.playerCardId,
                action.selectedPlayerDetails.attributesId,
                action.selectedPlayerDetails.statisticsId
            );

            return (state.selectedPlayerDetails = newDetails);
        case UPDATE_PLAYER_DETAILS:
            const updatedDetails = new PlayerStatistics(
                action.selectedPlayerDetails.playerID,
                action.selectedPlayerDetails.phone,
                action.selectedPlayerDetails.email,
                action.selectedPlayerDetails.height,
                action.selectedPlayerDetails.weight,
                action.selectedPlayerDetails.playerCardId,
                action.selectedPlayerDetails.attributesId,
                action.selectedPlayerDetails.statisticsId
            );
            return (state.selectedPlayerDetails = updatedDetails);
    }
    return state;
};
