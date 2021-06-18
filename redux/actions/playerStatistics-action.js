export const FETCH_PLAYER_STATISTICS = "FETCH_PLAYER_STATISTICS";
export const GET_STATISTICS_OF_PLAYER = "GET_STATISTICS_OF_PLAYER";
export const CREATE_PLAYER_STATISTICS = "CREATE_PLAYER_STATISTICS";
export const UPDATE_PLAYER_STATISTICS = "UPDATE_PLAYER_STATISTICS";
export const DELETE_PLAYER_STATISTICS = "DELETE_PLAYER_STATISTICS";
export const PROFILE_STATISTICS = "PROFILE_STATISTICS";

import API from "../../constants/ApiUrl";
import PlayerStatistics from "../../models/PlayerStatistics";
const BASE_URL = `${API}/statistic`;

//Getting all the player statistics in the database
export const fetchPlayerStatistics = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Can not GET player statistics ");
            }

            const resData = await response.json();
            const loadedPlayerStats = [];

            for (const key in resData) {
                loadedPlayerStats.push(
                    new PlayerStatistics(
                        resData[key]._id,
                        resData[key].playerID,
                        resData[key].goals,
                        resData[key].assists,
                        resData[key].red,
                        resData[key].yellow,
                        resData[key].motm,
                        resData[key].cleanSheet,
                        resData[key].form,
                        resData[key].playedMatches
                    )
                );
            }

            dispatch({
                type: FETCH_PLAYER_STATISTICS,
                playerStats: loadedPlayerStats,
            });
        } catch (err) {}
    };
};

//Getting statistics of specified player
export const getStatsOfPlayer = (playerID) => {
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
        } catch (err) {}
    };
};

//Creating new statistics
export const createPlayerStatistics = (
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
            const playerStats = new PlayerStatistics(
                resData.data._id,
                playerID,
                goals,
                assists,
                red,
                yellow,
                motm,
                cleanSheet,
                form,
                playedMatches
            );
            dispatch({
                type: CREATE_PLAYER_STATISTICS,
                newPlayerStats: playerStats,
            });
        } catch (err) {
            throw new Error("Can not CREATE new player statistics");
        }
    };
};

//Updating existing statistics of a player
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
            updatedPlayerStats = new PlayerStatistics(
                resData.data._id,
                playerID,
                goals,
                assists,
                red,
                yellow,
                motm,
                cleanSheet,
                form,
                playedMatches
            );
            dispatch({
                type: UPDATE_PLAYER_STATISTICS,
                pid: playerID,
                playerStatData: updatedPlayerStats,
            });
        } catch (err) {}
    };
};

//Deletes statistics with the given playerID
export const deletePlayerStatistic = (playerID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Can not DELETE player statistics");
        }
        dispatch({ type: DELETE_PLAYER_STATISTICS, pid: playerID });
    };
};

//Getting statistics of specified player
export const getStatsOfProfile = (playerID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/${playerID}`);
            if (!response.ok) {
                throw new Error("Can not GET statistics of the player");
            }

            const resData = await response.json();
            dispatch({
                type: PROFILE_STATISTICS,
                profileStatistics: resData,
            });
        } catch (err) {}
    };
};
