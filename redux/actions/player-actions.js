export const FETCH_PLAYERS = "FETCH_PLAYERS";
export const CREATE_PLAYER = "CREATE_PLAYER";
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";

import API from "../../constants/ApiUrl";
import Player from "../../models/Player";

import { addPlayerCard, deletePlayerCard } from "./playerCard-action";
import {
    createPlayerAttribute,
    deletePlayerAttribute,
} from "./playerAttribute-action";
import {
    createPlayerStatistics,
    deletePlayerStatistic,
} from "./playerStatistics-action";

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
            const {
                name,
                position,
                overall,
                image,
                kitNumber,
                foot,
                age,
            } = playerCard;

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
                throw new Error("Can not POST new player");
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

            dispatch(
                createPlayerStatistics(
                    resData.data._id,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    "harika",
                    0
                )
            );
            const newPlayer = new Player(
                resData.data._id,
                resData.data.email,
                resData.data.playerCardID,
                resData.data.playerAttributeID
            );

            dispatch({
                type: CREATE_PLAYER,
                newPlayer: newPlayer,
                selectedPlayerID: newPlayer.id,
            });
        } catch (err) {
            console.log(err);
            throw new Error("Can not ADD new player");
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
        dispatch(deletePlayerCard(playerID));
        dispatch(deletePlayerAttribute(playerID));
        dispatch(deletePlayerStatistic(playerID));
        dispatch({ type: DELETE_PLAYER, pid: playerID });
    };
};
