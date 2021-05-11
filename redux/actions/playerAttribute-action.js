export const GET_ATTRIBUTES_OF_PLAYER = "GET_ATTRIBUTES_OF_PLAYER";
export const CREATE_PLAYER_ATTRIBUTE = "CREATE_PLAYER_ATTRIBUTE";
export const UPDATE_PLAYER_ATTRIBUTE = "UPDATE_PLAYER_ATTRIBUTE";
export const DELETE_PLAYER_ATTRIBUTE = "DELETE_PLAYER_ATTRIBUTE";
export const GET_ALL_ATTRIBUTES = "GET_ALL_ATTRIBUTES";

import API from "../../constants/ApiUrl";

import PlayerAttribute from "../../models/PlayerAttribute";
const BASE_URL = `${API}/attribute`;

export const getAllAttributes = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Can not get attr list");
            }
            const resData = await response.json();
            const playerAttrs = [];

            for (const key in resData) {
                playerAttrs.push(
                    new PlayerAttribute(
                        resData[key]._id,
                        resData[key].playerID,
                        resData[key].pace,
                        resData[key].shooting,
                        resData[key].passing,
                        resData[key].dribbling,
                        resData[key].defending,
                        resData[key].physical,
                        resData[key].goalKeeper
                    )
                );
            }
            dispatch({
                type: GET_ALL_ATTRIBUTES,
                attributes: playerAttrs,
            });
        } catch (err) {}
    };
};

//Getting attributes of specified player
export const fetchPlayerAttributes = (playerID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/${playerID}`);
            if (!response.ok) {
                throw new Error("Can not GET attributes of the player");
            }

            const resData = await response.json();
            const loadedAttribute = new PlayerAttribute(
                resData._id,
                resData.playerID,
                resData.pace,
                resData.shooting,
                resData.passing,
                resData.dribbling,
                resData.defending,
                resData.physical,
                resData.goalKeeper
            );

            dispatch({
                type: GET_ATTRIBUTES_OF_PLAYER,
                selectedPlayerAttribute: loadedAttribute,
            });
        } catch (err) {}
    };
};

//Getting new attributes for a player
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
            const newAttribute = new PlayerAttribute(
                resData._id,
                resData.playerID,
                resData.pace,
                resData.shooting,
                resData.passing,
                resData.dribbling,
                resData.defending,
                resData.physical,
                resData.goalKeeper
            );
            dispatch({
                type: CREATE_PLAYER_ATTRIBUTE,
                newAttribute: newAttribute,
            });
        } catch (err) {}
    };
};

//Updating existing attributes of a player
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

            const updatedAttribute = new PlayerAttribute(
                resData._id,
                resData.playerID,
                resData.pace,
                resData.shooting,
                resData.passing,
                resData.dribbling,
                resData.defending,
                resData.physical,
                resData.goalKeeper
            );
            dispatch({
                type: UPDATE_PLAYER_ATTRIBUTE,
                selectedPlayerAttribute: updatedAttribute,
            });
        } catch (err) {}
    };
};

//Deletes attribute for the given playerID
export const deletePlayerAttribute = (playerID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Can not DELETE player ");
        }
        dispatch({ type: DELETE_PLAYER_ATTRIBUTE, pid: playerID });
    };
};
