import { ALL_TEAMS_FETCHED, REMOVE_ALL_TEAMS, TeamsActionTypes, TeamsState } from './types';

const initialState: TeamsState = {
  teams: null,
};

const teamReducer = (state = initialState, action: TeamsActionTypes): TeamsState => {
  switch (action.type) {
    case ALL_TEAMS_FETCHED:
      return { ...state, teams: action.teams };

    case REMOVE_ALL_TEAMS:
      return { teams: null };

    default:
      return state;
  }
};

export default teamReducer;
