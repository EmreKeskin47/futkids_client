import {
    CREATE_PLAYER_ATTRIBUTE,
    GET_ATTRIBUTES_OF_PLAYER,
    UPDATE_PLAYER_ATTRIBUTE,
} from "../actions/playerAttribute-action";

import PlayerAttribute from "../../models/PlayerAttribute";

const initialState = {
    selectedPlayerAttribute: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTRIBUTES_OF_PLAYER:
            return (state.selectedPlayerAttribute =
                action.selectedPlayerAttribute);
        case CREATE_PLAYER_ATTRIBUTE:
            const newAttribute = new PlayerAttribute(
                action.selectedPlayerAttribute.playerID,
                action.selectedPlayerAttribute.pace,
                action.selectedPlayerAttribute.shooting,
                action.selectedPlayerAttribute.passing,
                action.selectedPlayerAttribute.dribbling,
                action.selectedPlayerAttribute.defending,
                action.selectedPlayerAttribute.physical,
                action.selectedPlayerAttribute.goalKeeper
            );
            return (state.selectedPlayerAttribute = newAttribute);
        case UPDATE_PLAYER_ATTRIBUTE:
            const updatedAttribute = new PlayerAttribute(
                action.selectedPlayerAttribute.playerID,
                action.selectedPlayerAttribute.pace,
                action.selectedPlayerAttribute.shooting,
                action.selectedPlayerAttribute.passing,
                action.selectedPlayerAttribute.dribbling,
                action.selectedPlayerAttribute.defending,
                action.selectedPlayerAttribute.physical,
                action.selectedPlayerAttribute.goalKeeper
            );
            return (state.selectedPlayerAttribute = updatedAttribute);
    }
    return state;
};
