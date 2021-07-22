import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { API_URL } from '../../config/apiUrl';
import { ISignUpCredentials } from '../../models/credentials.model';
import { AppStateActions } from '../appState/action-types';
import { appDoneLoading, appLoading } from '../appState/actions';
import { setMessage } from '../appState/actions';
import { StoreState } from '../types';
import { PlayersActions } from './action-types';
import { addNewPlayer, deletePlayer, storeAllPlayers } from './actions';

export const addPlayer = (
  signUpCredentials: ISignUpCredentials,
): ThunkAction<void, StoreState, unknown, Action<string>> => {
  const {
    userName,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    totaalToto,
    teamId,
  } = signUpCredentials;
  return async (dispatch: Dispatch<PlayersActions | AppStateActions>) => {
    dispatch(appLoading());
    try {
      const token = localStorage.getItem('user_token');
      const response = await axios.post(
        `${API_URL}/players/signup`,
        {
          userName,
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          totaalToto,
          teamId,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch(addNewPlayer(response.data.data));
      dispatch(setMessage(response.data.status, response.data.message));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage('error', error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage('error', error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const fetchAllPlayers = (): ThunkAction<
  void,
  StoreState,
  unknown,
  Action<string>
> => async (dispatch: Dispatch<PlayersActions | AppStateActions>) => {
  dispatch(appLoading());
  try {
    const token = localStorage.getItem('user_token');
    const response = await axios.get(`${API_URL}/players`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(storeAllPlayers(response.data.data));
    dispatch(appDoneLoading());
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage('error', error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage('error', error.message));
    }
    dispatch(appDoneLoading());
  }
};

export const playerDelete = (
  id: number,
): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch: Dispatch<PlayersActions | AppStateActions>,
) => {
  dispatch(appLoading());
  try {
    const token = localStorage.getItem('user_token');
    const response = await axios.delete(`${API_URL}/players/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response);

    dispatch(deletePlayer(id));
    dispatch(setMessage(response.data.status, response.data.message));
    dispatch(appDoneLoading());
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage('error', error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage('error', error.message));
    }
    dispatch(appDoneLoading());
  }
};
