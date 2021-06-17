export const ADD_PLAYER_CARD = "ADD_PLAYER_CARD";
export const FETCH_PLAYER_CARD = "FETCH_PLAYER_CARD";
export const DELETE_PLAYER_CARD = "DELETE_PLAYER_CARD";
export const UPDATE_PLAYER_CARD = "UPDATE_PLAYER_CARD";
export const GET_PLAYER_CARD = "GET_PLAYER_CARD";
export const WEEKLY_VOTE = "WWEKLY_VOTE";

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
                        resData[key].playerID,
                        resData[key].name,
                        resData[key].position,
                        resData[key].overall,
                        resData[key].image,
                        resData[key].kitNumber,
                        resData[key].foot,
                        resData[key].age,
                        resData[key].weeklyVote
                    )
                );
            }

            dispatch({
                type: FETCH_PLAYER_CARD,
                playerCards: loadedPlayerCards,
            });
        } catch (err) {}
    };
};

//Create new player card
export const addPlayerCard = (
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
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    playerID,
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
            const playerCard = new PlayerCard(
                resData.data._id,
                playerID,
                name,
                position,
                overall,
                image,
                kitNumber,
                foot,
                age
            );

            dispatch({
                type: ADD_PLAYER_CARD,
                newPlayerCard: playerCard,
            });
        } catch (err) {}
    };
};

//Deletes card with the given playerID
export const deletePlayerCard = (playerID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Can not DELETE player card ");
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
                playerID,
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
        const resData = await response.json();
        const updatedPlayerCard = new PlayerCard(
            resData._id,
            playerID,
            name,
            position,
            overall,
            image,
            kitNumber,
            foot,
            age
        );

        dispatch({
            type: UPDATE_PLAYER_CARD,
            pid: playerID,
            playerCardData: updatedPlayerCard,
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

export const weeklyVote = (playerID, voteWeight) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                voteWeight,
            }),
        });
        if (!response.ok) {
            throw new Error("Can not POST vote");
        }
        const resData = await response.json();

        dispatch({
            type: WEEKLY_VOTE,
            res: resData,
        });
    };
};
