export const GET_STATISTICS_OF_PLAYER = "GET_STATISTICS_OF_PLAYER";
export const CREATE_PLAYER_STATISTICS = "CREATE_PLAYER_STATISTICS";
export const UPDATE_PLAYER_STATISTICS = "UPDATE_PLAYER_STATISTICS";

import API from "../../constants/ApiUrl";
const BASE_URL = `${API}/statistics`;

//Getting statistics of specified player
export const fetchPlayerStatistics = (playerID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/${playerID}`);
            if (!response.ok) {
                throw new Error("Can not GET statistics of the player");
            }

            const resData = await response.json();
            dispatch({
                type: GET_STATISTICS_OF_PLAYER,
                selectedPlayerStatistics: resData,
            });
        } catch (err) {
            throw new Error("Can not SET statistics of the player");
        }
    };
};

//Creating new statistics
export const createPlayerAttribute = (
    playerID,
    goals,
    assists,
    red,
    yellow,
    motm,
    cleanSheet,
    form,
    playedMatches
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
                    goals,
                    assists,
                    red,
                    yellow,
                    motm,
                    cleanSheet,
                    form,
                    playedMatches,
                }),
            });
            if (!response.ok) {
                throw new Error("Can not POST new player statistics");
            }
            const resData = await response.json();
            dispatch({
                type: CREATE_PLAYER_STATISTICS,
                selectedPlayerStatistics: {
                    id: resData.data._id,
                    playerID: playerID,
                    goals: goals,
                    assists: assists,
                    red: red,
                    yellow: yellow,
                    motm: motm,
                    cleanSheet: cleanSheet,
                    form: form,
                    playedMatches: playedMatches,
                },
            });
        } catch (err) {
            throw new Error("Can not CREATE new player statistics");
        }
    };
};

export const updatePlayerStatistics = (
    playerID,
    goals,
    assists,
    red,
    yellow,
    motm,
    cleanSheet,
    form,
    playedMatches
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
                    goals,
                    assists,
                    red,
                    yellow,
                    motm,
                    cleanSheet,
                    form,
                    playedMatches,
                }),
            });
            if (!response.ok) {
                throw new Error("Can not PATCH player statistics");
            }
            const resData = await response.json();
            dispatch({
                type: UPDATE_PLAYER_STATISTICS,
                selectedPlayerStatistics: {
                    id: resData.data._id,
                    playerID: playerID,
                    playerID: playerID,
                    goals: goals,
                    assists: assists,
                    red: red,
                    yellow: yellow,
                    motm: motm,
                    cleanSheet: cleanSheet,
                    form: form,
                    playedMatches: playedMatches,
                },
            });
        } catch (err) {
            throw new Error("Can not UPDATE new player statistics");
        }
    };
};
