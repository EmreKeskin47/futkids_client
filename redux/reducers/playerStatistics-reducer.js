import {
    CREATE_PLAYER_STATISTICS,
    GET_STATISTICS_OF_PLAYER,
    UPDATE_PLAYER_STATISTICS,
} from "../actions/playerStatistics-action";
import PlayerStatistics from "../../models/PlayerStatistics";

const initialState = {
    selectedPlayerStatistics: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STATISTICS_OF_PLAYER:
            return {
                selectedPlayerStatistics: action.selectedPlayerStatistics,
            };
        case CREATE_PLAYER_STATISTICS:
            const newStats = new PlayerStatistics(
                action.selectedPlayerStatistics.playerID,
                action.selectedPlayerStatistics.goals,
                action.selectedPlayerStatistics.assists,
                action.selectedPlayerStatistics.red,
                action.selectedPlayerStatistics.yellow,
                action.selectedPlayerStatistics.motm,
                action.selectedPlayerStatistics.cleanSheet,
                action.selectedPlayerStatistics.form,
                action.selectedPlayerStatistics.playedMatches
            );
            return (state.selectedPlayerStatistics = newStats);
        case UPDATE_PLAYER_STATISTICS:
            const updatedStats = new PlayerStatistics(
                action.selectedPlayerStatistics.playerID,
                action.selectedPlayerStatistics.goals,
                action.selectedPlayerStatistics.assists,
                action.selectedPlayerStatistics.red,
                action.selectedPlayerStatistics.yellow,
                action.selectedPlayerStatistics.motm,
                action.selectedPlayerStatistics.cleanSheet,
                action.selectedPlayerStatistics.form,
                action.selectedPlayerStatistics.playedMatches
            );
            return (state.selectedPlayerStatistics = updatedStats);
    }
    return state;
};
