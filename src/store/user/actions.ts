import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { API_URL } from '../../config/constants';
import { ILogInCredentials, IProfileDetails } from '../../models/credentials.model';
import { IUser } from '../../models/player.model';
import { appDoneLoading, appLoading, setMessage } from '../appState/actions-creators';
import { ActionTypePlayers } from '../players/action-types';
import { PlayersActions } from '../players/actions';
import { removeAllFixtures } from '../predictions/actions';
import { removeAllScores } from '../scores/actions';
import { resetAllTeams } from '../teams/actions';
import { StoreState } from '../types';
import {
  LOG_IN_SUCCESS_USER,
  LOG_OUT_USER,
  LogInSuccessUser,
  LogOutUser,
  TOKEN_STILL_VALID_USER,
  TokenUserStillValid,
  UPDATE_USER_PROFILE,
  UpdateUserProfile,
} from './types';

export const logInSuccessUser = (user: IUser): LogInSuccessUser => {
  return {
    type: LOG_IN_SUCCESS_USER,
    user,
  };
};

export const logOutUser = (): LogOutUser => ({
  type: LOG_OUT_USER,
});

export const tokenUserStillValid = (user: IUser): TokenUserStillValid => ({
  type: TOKEN_STILL_VALID_USER,
  user,
});

export const updateUserProfile = (user: IUser): UpdateUserProfile => ({
  type: UPDATE_USER_PROFILE,
  user,
});

export const changePassword = (newPassword: string): ThunkAction<void, StoreState, unknown, Action<string>> => {
  return async (dispatch: Dispatch) => {
    dispatch(appLoading());
    try {
      const token = localStorage.getItem('user_token');
      const response = await axios.patch(
        `${API_URL}/me/password`,
        {
          newPassword,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      dispatch(setMessage('success', response.data.message));
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

export const editUserProfile = (
  profileDetails: IProfileDetails,
): ThunkAction<void, StoreState, unknown, Action<string>> => {
  const { userName, firstName, lastName, email, phoneNumber, admin, totaalToto, teamId } = profileDetails;
  return async (dispatch: Dispatch) => {
    dispatch(appLoading());
    try {
      const token = localStorage.getItem('user_token');
      const response = await axios.patch(
        `${API_URL}/me/profile`,
        {
          userName,
          firstName,
          lastName,
          email,
          phoneNumber,
          admin,
          totaalToto,
          teamId,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch(updateUserProfile(response.data.userData));
      dispatch(setMessage('success', response.data.message));
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

export const userLogIn = (credentials: ILogInCredentials): ThunkAction<void, StoreState, unknown, Action<string>> => {
  const { email, password } = credentials;
  return async (dispatch: Dispatch) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      dispatch(logInSuccessUser(response.data.userData));
      dispatch(setMessage('success', response.data.message));
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

export const userLogOut = (): ((dispatch: Dispatch) => void) => (dispatch: Dispatch) => {
  dispatch(logOutUser());
  dispatch(setMessage('success', 'Tot ziens!'));
  dispatch(removeAllScores());
  dispatch<PlayersActions>({ type: ActionTypePlayers.RESET_PLAYERS });
  dispatch(removeAllFixtures());
  dispatch(resetAllTeams());
};

export const getUserWithStoredToken = (): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch: Dispatch,
) => {
  dispatch(appLoading());
  try {
    // if token check if valid
    const token = localStorage.getItem('user_token');
    const response = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(tokenUserStillValid(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    if (error.response) {
      console.log(error.response.message);
    } else {
      console.log(error);
    }
    userLogOut()(dispatch);
    dispatch(appDoneLoading());
  }
};
