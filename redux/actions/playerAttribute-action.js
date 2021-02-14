export const GET_ATTRIBUTES_OF_PLAYER = "GET_ATTRIBUTES_OF_PLAYER";
export const CREATE_PLAYER_ATTRIBUTE = "CREATE_PLAYER_ATTRIBUTE";
export const UPDATE_PLAYER_ATTRIBUTE = "UPDATE_PLAYER_ATTRIBUTE";

import API from "../../constants/ApiUrl";
const BASE_URL = `${API}/attributes`;

//Getting attributes of specified player
export const fetchPlayerAttributes = (playerID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/${playerID}`);
            if (!response.ok) {
                throw new Error("Can not GET attributes of the player");
            }

            const resData = await response.json();
            dispatch({
                type: GET_ATTRIBUTES_OF_PLAYER,
                selectedPlayerAttribute: resData,
            });
        } catch (err) {
            throw new Error("Can not SET attributes of the player");
        }
    };
};

export const createPlayerAttribute = (
    playerID,
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    goalKeeper
) => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    playerID,
                    pace,
                    shooting,
                    passing,
                    dribbling,
                    defending,
                    physical,
                    goalKeeper,
                }),
            });
            if (!response.ok) {
                throw new Error("Can not POST new player attribute");
            }
            const resData = await response.json();
            dispatch({
                type: CREATE_PLAYER_ATTRIBUTE,
                selectedPlayerAttribute: {
                    id: resData.data._id,
                    playerID: playerID,
                    pace: pace,
                    shooting: shooting,
                    passing: passing,
                    dribbling: dribbling,
                    defending: defending,
                    physical: physical,
                    goalKeeper: goalKeeper,
                },
            });
        } catch (err) {
            throw new Error("Can not CREATE new player attribute");
        }
    };
};

export const updatePlayerAttribute = (
    playerID,
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    goalKeeper
) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/${playerID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    playerID,
                    pace,
                    shooting,
                    passing,
                    dribbling,
                    defending,
                    physical,
                    goalKeeper,
                }),
            });
            if (!response.ok) {
                throw new Error("Can not PATCH player attribute");
            }
            const resData = await response.json();
            dispatch({
                type: UPDATE_PLAYER_ATTRIBUTE,
                selectedPlayerAttribute: {
                    id: resData.data._id,
                    playerID: playerID,
                    pace: pace,
                    shooting: shooting,
                    passing: passing,
                    dribbling: dribbling,
                    defending: defending,
                    physical: physical,
                    goalKeeper: goalKeeper,
                },
            });
        } catch (err) {
            throw new Error("Can not UPDATE new player attribute");
        }
    };
};
