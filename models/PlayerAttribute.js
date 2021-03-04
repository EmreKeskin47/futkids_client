class PlayerAttribute {
  constructor(
    id,
    playerID,
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    goalKeeper
  ) {
    this.id = id;
    this.playerID = playerID;
    this.pace = pace;
    this.shooting = shooting;
    this.passing = passing;
    this.dribbling = dribbling;
    this.defending = defending;
    this.physical = physical;
    this.goalKeeper = goalKeeper;
  }
}

export default PlayerAttribute;
