import {
    CREATE_PLAYER_STATISTICS,
    GET_STATISTICS_OF_PLAYER,
    UPDATE_PLAYER_STATISTICS,
    DELETE_PLAYER_STATISTICS,
    FETCH_PLAYER_STATISTICS,
} from "../actions/playerStatistics-action";
import PlayerStatistics from "../../models/PlayerStatistics";

const initialState = {
    playerStats: [],
    selectedPlayerStatistics: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYER_STATISTICS:
            state.playerStats = action.playerStats;
            return state;
        case CREATE_PLAYER_STATISTICS:
            return {
                playerStats: state.playerStats.concat(action.newPlayerStats),
            };
        case DELETE_PLAYER_STATISTICS:
            return {
                ...state,
                playerStats: state.playerStats.filter(
                    (stat) => stat.id !== action.pid
                ),
            };
        case UPDATE_PLAYER_STATISTICS:
            const playerIndex = state.playerStats.findIndex(
                (stat) => stat.id === action.pid
            );
            const updatedPlayerStats = new PlayerStatistics(
                action.playerStatData._id,
                action.playerStatData.playerID,
                action.playerStatData.goals,
                action.playerStatData.assists,
                action.playerStatData.red,
                action.playerStatData.yellow,
                action.playerStatData.motm,
                action.playerStatData.cleanSheet,
                action.playerStatData.form,
                action.playerStatData.playedMatches
            );
            state.playerStats[playerIndex] = updatedPlayerStats;
            return state;
        case GET_STATISTICS_OF_PLAYER:
            state.selectedPlayerStatistics = action.selectedPlayerStatistics;
            return state;
    }
    return state;
};
