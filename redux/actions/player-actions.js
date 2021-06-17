export const FETCH_PLAYERS = "FETCH_PLAYERS";
export const CREATE_PLAYER = "CREATE_PLAYER";
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";
export const GET_PLAYER = "GET_PLAYER";

import API from "../../constants/ApiUrl";
import Player from "../../models/Player";

import { addPlayerCard } from "./playerCard-action";
import { createPlayerAttribute } from "./playerAttribute-action";
import {
    createPlayerStatistics,
    deletePlayerStatistic,
} from "./playerStatistics-action";
import { db } from "../../constants/firebase/config";

const BASE_URL = `${API}/player`;

export const fetchPlayers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error("Can not CREATE player");
            }
            const resData = await response.json();
            const players = [];

            for (const key in resData) {
                players.push(
                    new Player(
                        resData[key]._id,
                        resData[key].email,
                        resData[key].playerCardID,
                        resData[key].playerAttributeID
                    )
                );
            }
            dispatch({
                type: FETCH_PLAYERS,
                players: players,
            });
        } catch (err) {
            throw new Error("Can not SET players");
        }
    };
};

export const createPlayer = (email, playerCard, playerAttribute) => {
    return async (dispatch) => {
        try {
            let playerCardID = "";
            let playerAttributeID = "";
            const { name, position, overall, image, kitNumber, foot, age } =
                playerCard;

            const {
                pace,
                shooting,
                passing,
                dribbling,
                defending,
                physical,
                goalKeeper,
            } = playerAttribute;

            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    playerCardID,
                    playerAttributeID,
                }),
            });

            if (!response.ok) {
                throw new Error("Can not POST new player", response);
            }

            //Creating player card
            const resData = await response.json();
            dispatch(
                addPlayerCard(
                    resData.data._id,
                    name,
                    position,
                    overall,
                    image,
                    kitNumber,
                    foot,
                    age
                )
            );

            //Creating player attribute
            dispatch(
                createPlayerAttribute(
                    resData.data._id,
                    pace,
                    shooting,
                    passing,
                    dribbling,
                    defending,
                    physical,
                    goalKeeper
                )
            );

            //Creating player Statistics
            dispatch(
                createPlayerStatistics(
                    resData.data._id,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    "0",
                    0
                )
            );

            //Creating player profile in firebase
            const profileData = db.collection("/user-profile");
            const data = await profileData.add({
                name: name,
                email: email,
                playerID: resData.data._id,
            });

            const newPlayer = new Player(
                resData.data._id,
                email,
                resData.data.playerCardID,
                resData.data.playerAttributeID
            );

            dispatch({
                type: CREATE_PLAYER,
                newPlayer: newPlayer,
                selectedPlayerID: newPlayer.id,
            });
        } catch (err) {
            throw new Error(err);
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
        dispatch(deletePlayerStatistic(playerID));
        dispatch({ type: DELETE_PLAYER, pid: playerID });
    };
};

//Getting card details of the player with the given PlayerID
export const getInfo = (playerID) => {
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

//update player
export const updatePlayer = (playerID, email, cardID, attributeID) => {
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/${playerID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                playerID,
                email,
                cardID,
                attributeID,
            }),
        });

        if (!response.ok) {
            throw new Error("Can not PATCH player");
        }
        const resData = await response.json();
        const updatedPlayer = new Player(
            resData._id,
            email,
            cardID,
            attributeID
        );

        dispatch({
            type: UPDATE_PLAYER,
            pid: resData._id,
            playerData: updatedPlayer,
        });
    };
};
