import Player from "../models/Player";
export const ADD_PLAYER = "ADD_PLAYER";
export const FETCH_PLAYER = "FETCH_PLAYER";

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
            console.log(resData);

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
                orderData: {
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
