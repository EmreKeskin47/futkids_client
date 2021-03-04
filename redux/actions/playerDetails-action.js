export const GET_DETAILS_OF_PLAYER = "GET_DETAILS_OF_PLAYER";
export const CREATE_PLAYER_DETAILS = "CREATE_PLAYER_DETAILS";
export const UPDATE_PLAYER_DETAILS = "UPDATE_PLAYER_DETAILS";

import API from "../../constants/ApiUrl";
const BASE_URL = `${API}/detail`;

//Getting details of specified player
export const fetchPlayerDetails = (playerID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/${playerID}`);
            if (!response.ok) {
                throw new Error("Can not GET details of the player");
            }

            const resData = await response.json();
            dispatch({
                type: GET_DETAILS_OF_PLAYER,
                selectedPlayerDetails: resData,
            });
        } catch (err) {
            throw new Error("Can not SET details of the player");
        }
    };
};

//Creating new details for a player
export const createPlayerDetails = (
    playerID,
    phone,
    email,
    height,
    weight,
    playerCardId,
    attributesId,
    statisticsId
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
                    phone,
                    email,
                    height,
                    weight,
                    playerCardId,
                    attributesId,
                    statisticsId,
                }),
            });
            if (!response.ok) {
                throw new Error("Can not POST new player details");
            }
            const resData = await response.json();
            dispatch({
                type: CREATE_PLAYER_DETAILS,
                selectedPlayerDetails: {
                    id: resData.data._id,
                    playerID: playerID,
                    phone: phone,
                    email: email,
                    height: height,
                    weight: weight,
                    playerCardId: playerCardId,
                    attributesId: attributesId,
                    statisticsId: statisticsId,
                },
            });
        } catch (err) {
            throw new Error("Can not CREATE new player details");
        }
    };
};

//Updating existing details of a player
export const updatePlayerDetails = (
    playerID,
    phone,
    email,
    height,
    weight,
    playerCardId,
    attributesId,
    statisticsId
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
                    phone,
                    email,
                    height,
                    weight,
                    playerCardId,
                    attributesId,
                    statisticsId,
                }),
            });
            if (!response.ok) {
                throw new Error("Can not PATCH player details");
            }
            const resData = await response.json();
            dispatch({
                type: UPDATE_PLAYER_DETAILS,
                selectedPlayerDetails: {
                    id: resData.data._id,
                    playerID: playerID,
                    phone: phone,
                    email: email,
                    height: height,
                    weight: weight,
                    playerCardId: playerCardId,
                    attributesId: attributesId,
                    statisticsId: statisticsId,
                },
            });
        } catch (err) {
            throw new Error("Can not UPDATE new player details");
        }
    };
};
