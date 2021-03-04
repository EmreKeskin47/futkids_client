class PlayerStatistics {
    constructor(
        id,
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
        this.id = id;
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
