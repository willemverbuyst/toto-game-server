import { IAllPlayers, INewPlayer } from '../../models/player.model';
import {
  ActionType,
  AddNewPlayer,
  DeletePlayer,
  ResetPlayers,
  StoreAllPlayers,
} from './action-types';

export const addNewPlayer = (player: INewPlayer): AddNewPlayer => {
  return {
    type: ActionType.ADD_NEW_PLAYER,
    payload: player,
  };
};

export const storeAllPlayers = (players: IAllPlayers): StoreAllPlayers => {
  return {
    type: ActionType.STORE_ALL_PLAYERS,
    payload: players,
  };
};

export const deletePlayer = (playerId: number): DeletePlayer => {
  return {
    type: ActionType.DELETE_PLAYER,
    payload: playerId,
  };
};

export const resetPlayers = (): ResetPlayers => {
  return {
    type: ActionType.RESET_PLAYERS,
  };
};
