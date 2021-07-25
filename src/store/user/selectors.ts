import { IUser } from '../../models/player.model';
import { IFixtureWithScoreAndPredictions } from '../../models/toto.models';
import * as UTILS from '../../utils';
import { StoreState } from '../types';

export const selectToken = (state: StoreState): string | null =>
  state.userState.token;

export const selectUser = (state: StoreState): IUser | null =>
  state.userState.user ? state.userState.user.profile : null;

export const selectUserId = (state: StoreState): number | null =>
  state.userState.user ? state.userState.user.profile.id : null;

export const selectCurrentRoundSortedByTime = (
  state: StoreState,
): IFixtureWithScoreAndPredictions[] | null => {
  if (
    state.userState.user &&
    state.userState.user.currentRound &&
    state.userState.user.currentRound.fixtures &&
    state.userState.user.currentRound.fixtures.length > 0
  ) {
    const fixtures = state.userState.user.currentRound.fixtures;

    const currentRoundSortedByTime = UTILS.sortArrayWithObjects<
      keyof IFixtureWithScoreAndPredictions,
      IFixtureWithScoreAndPredictions
    >('eventTimeStamp')(fixtures);

    return currentRoundSortedByTime;
  }
  return null;
};

export const selectRoundAndTotoRoundNumber = (
  state: StoreState,
): Array<number> => {
  if (state.userState.user && state.userState.user.currentRound) {
    const roundNumber = state.userState.user.currentRound.roundNumber;
    const totoRoundNumber = state.userState.user.currentRound.totoRoundNumber;

    return [roundNumber, totoRoundNumber];
  } else {
    return [1, 1];
  }
};
