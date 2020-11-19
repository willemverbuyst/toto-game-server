export const CURRENT_ROUND_FETCHED = 'GET_CURRENT_ROUND';
export const ALL_FIXTURES_FETCHED = 'ALL_FIXTURES_FETCHED';
export const REMOVE_ALL_FIXTURES = 'REMOVE_ALL_FIXTURES';

export type VoorspellingenState = {
  currentRound: Round | null;
  allFixtures: Game[] | null;
};

export type WedstrijdMetVoorspellingen = {
  awayTeamId: number;
  awayTeamLogo: string;
  awayTeamName: string;
  createdAt: string;
  eventTimeStamp: number;
  goalsAwayTeam: number | null;
  goalsHomeTeam: number | null;
  homeTeamId: number;
  homeTeamLogo: string;
  homeTeamName: string;
  predictions: {
    pGoalsAwayTeam: number | null;
    pGoalsHomeTeam: number | null;
  };
  round: string;
  score: string;
  status: string;
  updatedAt: string;
};

export type Round = WedstrijdMetVoorspellingen[];

export type Game = Round[];

export type CurrentRoundFetched = {
  type: typeof CURRENT_ROUND_FETCHED;
  currentRound: WedstrijdMetVoorspellingen[];
};

export type AllFixturesFetched = {
  type: typeof ALL_FIXTURES_FETCHED;
  allFixtures: Game[];
};

export type RemoveAllFixtures = {
  type: typeof REMOVE_ALL_FIXTURES;
};

export type VoorspellingenActionTypes =
  | CurrentRoundFetched
  | AllFixturesFetched
  | RemoveAllFixtures;