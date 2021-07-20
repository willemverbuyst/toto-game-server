import { ICurrentRound, TotoRound } from '../../models/toto.models';
import { ActionType, PredictionActions } from './action-types';

export interface IPredictionsState {
  currentRound: ICurrentRound | null;
  allFixtures: TotoRound[] | null;
  allPredictions: { fixtures: TotoRound[]; player: string } | null;
}

const initialState: IPredictionsState = {
  currentRound: null,
  allFixtures: null,
  allPredictions: null,
};

const predictionsReducer = (
  state = initialState,
  action: PredictionActions,
): IPredictionsState => {
  switch (action.type) {
    case ActionType.STORE_ALL_FIXTURES:
      return { ...state, allFixtures: action.payload };

    case ActionType.STORE_ALL_PREDICTIONS:
      return { ...state, allPredictions: action.payload };

    case ActionType.POST_PREDICTION:
      return {
        ...state,
        allFixtures: state.allFixtures
          ? state.allFixtures.map((totoRound) =>
              totoRound.map((round) =>
                round.map((fixture) =>
                  fixture.id === action.payload.fixtureId
                    ? {
                        ...fixture,
                        predictions: {
                          pGoalsHomeTeam: action.payload.pGoalsHomeTeam,
                          pGoalsAwayTeam: action.payload.pGoalsAwayTeam,
                        },
                      }
                    : fixture,
                ),
              ),
            )
          : null,
        currentRound: state.currentRound
          ? {
              ...state.currentRound,
              fixtures: state.currentRound.fixtures.map((fixture) =>
                fixture.id === action.payload.fixtureId
                  ? {
                      ...fixture,
                      predictions: {
                        pGoalsHomeTeam: action.payload.pGoalsHomeTeam,
                        pGoalsAwayTeam: action.payload.pGoalsAwayTeam,
                      },
                    }
                  : fixture,
              ),
            }
          : null,
      };

    case ActionType.RESET_ALL_FIXTURES:
      return { allFixtures: null, currentRound: null, allPredictions: null };

    case ActionType.RESET_ALL_PREDICTIONS:
      return { allFixtures: null, currentRound: null, allPredictions: null };

    case ActionType.UPDATE_PREDICTION:
      return {
        ...state,
        allFixtures: state.allFixtures
          ? state.allFixtures.map((totoRound) =>
              totoRound.map((round) =>
                round.map((fixture) =>
                  fixture.id === action.payload.fixtureId
                    ? {
                        ...fixture,
                        predictions: {
                          pGoalsHomeTeam: action.payload.pGoalsHomeTeam,
                          pGoalsAwayTeam: action.payload.pGoalsAwayTeam,
                        },
                      }
                    : fixture,
                ),
              ),
            )
          : null,
        currentRound: state.currentRound
          ? {
              ...state.currentRound,
              fixtures: state.currentRound.fixtures.map((fixture) =>
                fixture.id === action.payload.fixtureId
                  ? {
                      ...fixture,
                      predictions: {
                        pGoalsHomeTeam: action.payload.pGoalsHomeTeam,
                        pGoalsAwayTeam: action.payload.pGoalsAwayTeam,
                      },
                    }
                  : fixture,
              ),
            }
          : null,
      };

    default:
      return state;
  }
};

export default predictionsReducer;
