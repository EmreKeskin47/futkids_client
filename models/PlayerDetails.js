class PlayerDetails {
    constructor(
        id,
        playerID,
        phone,
        email,
        height,
        weight,
        playerCardId,
        attributesId,
        statisticsId
    ) {
        this.id = id;
        this.playerID = playerID;
        this.phone = phone;
        this.email = email;
        this.height = height;
        this.weight = weight;
        this.playerCardId = playerCardId;
        this.attributesId = attributesId;
        this.statisticsId = statisticsId;
    }
}

export default PlayerDetails;
