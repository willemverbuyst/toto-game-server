import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { API_URL } from '../../config/constants';
import { AppStateActions } from '../appState/action-types';
import { appDoneLoading, appLoading } from '../appState/actions';
import { handleError } from '../error-handler';
import { StoreState } from '../types';
import { TeamsActions } from './action-types';
import { storeAllTeams } from './actions';

export const fetchAllTeams = (): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch: Dispatch<AppStateActions | TeamsActions>,
) => {
  dispatch(appLoading());
  try {
    const token = localStorage.getItem('user_token');
    const response = await axios.get(`${API_URL}/teams`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const teams = response.data;

    dispatch(storeAllTeams(teams));
    dispatch(appDoneLoading());
  } catch (error) {
    handleError(error);
  }
};