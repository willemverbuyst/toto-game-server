const scores = require('../constants/scores');

const calculateScore = (
  goalsHomeTeam,
  goalsAwayTeam,
  predictionHomeTeam,
  predictionAwayTeam,
) => {
  // Check if there are values, if not return with a score of zero
  if (
    goalsHomeTeam == null ||
    goalsAwayTeam == null ||
    predictionHomeTeam == null ||
    predictionAwayTeam == null
  ) {
    return 0;
  }

  // If all values are there, continue
  let score = 0;

  const winnerMatch = getWinner(goalsHomeTeam, goalsAwayTeam);
  const winnerPrediction = getWinner(predictionHomeTeam, predictionAwayTeam);

  if (winnerMatch === winnerPrediction) {
    score = score + scores.TOTO_SCORE;
  }

  const guessedHome = goalsHomeTeam === predictionHomeTeam;
  const guessedAway = goalsAwayTeam === predictionAwayTeam;

  if (guessedHome) {
    score = score + scores.GOAL_BONUS;
  }

  if (guessedAway) {
    score = score + scores.GOAL_BONUS;
  }

  if (guessedHome && guessedAway) {
    score = score + scores.FULL_SCORE;
  }

  return score;
};

const getWinner = (homeTeam, awayTeam) =>
  homeTeam > awayTeam ? 'homeWins' : homeTeam < awayTeam ? 'awayWins' : 'draw';

module.exports = {
  calculateScore,
};
