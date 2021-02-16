class PlayerStatistics {
    constructor(
        playerID,
        goals,
        assists,
        red,
        yellow,
        motm,
        cleanSheet,
        form,
        playedMatches
    ) {
        this.playerID = playerID;
        this.goals = goals;
        this.assists = assists;
        this.red = red;
        this.yellow = yellow;
        this.motm = motm;
        this.cleanSheet = cleanSheet;
        this.form = form;
        this.playedMatches = playedMatches;
    }
}

export default PlayerStatistics;
