import {
    CREATE_PLAYER_ATTRIBUTE,
    DELETE_PLAYER_ATTRIBUTE,
    GET_ALL_ATTRIBUTES,
    GET_ATTRIBUTES_OF_PLAYER,
    UPDATE_PLAYER_ATTRIBUTE,
} from "../actions/playerAttribute-action";

import PlayerAttribute from "../../models/PlayerAttribute";

const initialState = {
    playerAttributes: [],
    selectedPlayerAttribute: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ATTRIBUTES:
            return { playerAttributes: action.attributes };
        case GET_ATTRIBUTES_OF_PLAYER:
            state.selectedPlayerAttribute = action.selectedPlayerAttribute;
            return state;
        case CREATE_PLAYER_ATTRIBUTE:
            return (state.selectedPlayerAttribute =
                action.selectedPlayerAttribute);
        case DELETE_PLAYER_ATTRIBUTE:
            selectedPlayerAttribute = {};
            return state;
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
