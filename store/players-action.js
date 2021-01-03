import Player from "../models/Player";
export const ADD_PLAYER = "ADD_PLAYER";
export const FETCH_PLAYER = "FETCH_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const GET_PLAYER = "GET_PLAYER";

const BASE_URL = "http://localhost:3000/api/v1/player";

export const fetchPlayers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Can not GET players");
            }
            const resData = await response.json();
            const loadedPlayers = [];

            for (const key in resData) {
                loadedPlayers.push(
                    new Player(
                        resData[key]._id,
                        resData[key].playerName,
                        resData[key].playerPosition,
                        resData[key].overall
                    )
                );
            }

            dispatch({
                type: FETCH_PLAYER,
                players: loadedPlayers,
            });
        } catch (err) {
            throw new Error("Can not SET players");
        }
    };
};

export const addPlayer = (playerName, playerPosition, overall) => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    playerName,
                    playerPosition,
                    overall,
                }),
            });

            if (!response.ok) {
                throw new Error("Can not POST new player");
            }

            const resData = await response.json();

            dispatch({
                type: ADD_PLAYER,
                playerData: {
                    id: resData.data._id,
                    playerName: playerName,
                    playerPosition: playerPosition,
                    overall: overall,
                },
            });
        } catch (err) {
            throw new Error("Can not add new player");
        }
    };
};

export const deletePlayer = (playerID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Can not DELETE player ");
        }
        dispatch({ type: DELETE_PLAYER, pid: playerID });
    };
};

export const updatePlayer = (playerID, playerName, playerPosition, overall) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                playerName,
                playerPosition,
                overall,
            }),
        });

        if (!response.ok) {
            throw new Error("Can not PATCH player");
        }

        dispatch({
            type: UPDATE_PLAYER,
            pid: playerID,
            playerData: {
                playerName,
                playerPosition,
                overall,
            },
        });
    };
};

export const getPlayerInfo = (playerID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`);
        if (!response.ok) {
            throw new Error("Can not GET detailed player info");
        }
        const resData = await response.json();
        dispatch({
            type: GET_PLAYER,
            playerData: resData,
        });
    };
};
