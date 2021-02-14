export const ADD_PLAYER_CARD = "ADD_PLAYER_CARD";
export const FETCH_PLAYER_CARD = "FETCH_PLAYER_CARD";
export const DELETE_PLAYER_CARD = "DELETE_PLAYER_CARD";
export const UPDATE_PLAYER_CARD = "UPDATE_PLAYER_CARD";
export const GET_PLAYER_CARD = "GET_PLAYER_CARD";

import PlayerCard from "../../models/PlayerCard";

import API from "../../constants/ApiUrl";
const BASE_URL = `${API}/playerCard`;

//Getting all the player cards in the database
export const fetchPlayerCards = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Can not GET player cards");
            }

            const resData = await response.json();
            const loadedPlayerCards = [];

            for (const key in resData) {
                loadedPlayerCards.push(
                    new PlayerCard(
                        resData[key]._id,
                        resData[key].name,
                        resData[key].position,
                        resData[key].overall,
                        resData[key].image,
                        resData[key].kitNumber,
                        resData[key].foot,
                        resData[key].age
                    )
                );
            }

            dispatch({
                type: FETCH_PLAYER_CARD,
                playerCards: loadedPlayerCards,
            });
        } catch (err) {
            throw new Error("Can not SET player cards");
        }
    };
};

//Create new player card
export const addPlayerCard = (
    name,
    position,
    overall,
    image,
    kitNumber,
    foot,
    age
) => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    position,
                    overall,
                    image,
                    kitNumber,
                    foot,
                    age,
                }),
            });

            if (!response.ok) {
                throw new Error("Can not POST new player card");
            }

            const resData = await response.json();

            dispatch({
                type: ADD_PLAYER_CARD,
                playerCardData: {
                    id: resData.data._id,
                    name: name,
                    position: position,
                    overall: overall,
                    image: image,
                    kitNumber: kitNumber,
                    foot: foot,
                    age: age,
                },
            });
        } catch (err) {
            throw new Error("Can not add new player card");
        }
    };
};

//Deletes card with the given playerID
export const deletePlayerCard = (playerID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Can not DELETE player ");
        }
        dispatch({ type: DELETE_PLAYER_CARD, pid: playerID });
    };
};

//Updates player card with given PlayerID
export const updatePlayerCard = (
    playerID,
    name,
    position,
    overall,
    image,
    kitNumber,
    foot,
    age
) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                position,
                overall,
                image,
                kitNumber,
                foot,
                age,
            }),
        });

        if (!response.ok) {
            throw new Error("Can not PATCH player card");
        }

        dispatch({
            type: UPDATE_PLAYER_CARD,
            pid: playerID,
            playerCardData: {
                name,
                position,
                overall,
                image,
                kitNumber,
                foot,
                age,
            },
        });
    };
};

//Getting card details of the player with the given PlayerID
export const getPlayerCardInfo = (playerID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`);
        if (!response.ok) {
            throw new Error("Can not GET detailed player card info");
        }
        const resData = await response.json();
        dispatch({
            type: GET_PLAYER_CARD,
            playerCardData: resData,
        });
    };
};
