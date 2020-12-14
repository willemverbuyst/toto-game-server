import reducer from '../reducer';
import {
  ADD_NEW_PLAYER,
  ALL_PLAYERS_FETCHED,
  PLAYER_PROFILE_FETCHED,
  REMOVE_ALL_PLAYERS,
  PlayersState,
  AddNewPlayer,
  AllPlayersFetched,
  PlayerProfileFetched,
  RemoveAllPlayers,
} from '../types';
import { IPlayer, IPlayerProfile } from '../../../models/player.model';

describe('#playersStateReducer', () => {
  describe('if given ADD_NEW_PLAYER action type and intialState', () => {
    test('returns the initial state with players: null', () => {
      const player: IPlayer = {
        admin: false,
        email: 'test@test.com',
        firstName: 'test_player',
        id: 1,
        lastName: 'tst_player',
        phoneNumber: '123',
        team: {
          id: 1,
          logo: 'test_logo',
          name: 'test_name',
        },
        totaalToto: true,
        userName: 'TEST',
      };
      const initialState: PlayersState = {
        players: null,
        playerProfile: null,
      };
      const action: AddNewPlayer = {
        type: ADD_NEW_PLAYER,
        player,
      };
      const newState: PlayersState = reducer(initialState, action);

      expect(newState).toEqual({
        players: null,
        playerProfile: null,
      });
      expect(newState.playerProfile).toBeNull;
      expect(newState.players).toBeNull;
      expect(newState).toEqual(initialState);
    });
  });
  describe('if given ADD_NEW_PLAYER action type and a state with players', () => {
    test('returns the state with a player added to players', () => {
      const player: IPlayer = {
        admin: false,
        email: 'test@test.com',
        firstName: 'test_player',
        id: 1,
        lastName: 'tst_player',
        phoneNumber: '123',
        team: {
          id: 1,
          logo: 'test_logo',
          name: 'test_name',
        },
        totaalToto: true,
        userName: 'TEST',
      };
      const initialState: PlayersState = {
        players: [player],
        playerProfile: null,
      };
      const action: AddNewPlayer = {
        type: ADD_NEW_PLAYER,
        player,
      };
      const newState: PlayersState = reducer(initialState, action);

      expect(newState.playerProfile).toBeNull;
      expect(newState.players?.length).toBe(2);
      expect(newState.players).toEqual([player, player]);
    });
  });
  describe('if given ALL_PLAYERS_FETCHED action type and initialState', () => {
    test('returns a new state with players', () => {
      const players: IPlayer[] = [
        {
          admin: false,
          email: 'test@test.com',
          firstName: 'test_player',
          id: 1,
          lastName: 'tst_player',
          phoneNumber: '123',
          team: {
            id: 1,
            logo: 'test_logo',
            name: 'test_name',
          },
          totaalToto: true,
          userName: 'TEST',
        },
      ];
      const initialState: PlayersState = {
        players: null,
        playerProfile: null,
      };
      const action: AllPlayersFetched = {
        type: ALL_PLAYERS_FETCHED,
        players,
      };
      const newState: PlayersState = reducer(initialState, action);

      expect(newState.playerProfile).toBeNull;
      expect(newState.players?.length).toBe(players.length);
      expect(newState.players).toEqual(players);
    });
  });
  describe('if given ALL_PLAYERS_FETCHED action type and a state with players', () => {
    test('returns a state with the new fetched players', () => {
      const players1: IPlayer[] = [
        {
          admin: false,
          email: 'test@test.com',
          firstName: 'test_player1',
          id: 1,
          lastName: 'tst_player',
          phoneNumber: '123',
          team: {
            id: 1,
            logo: 'test_logo',
            name: 'test_name',
          },
          totaalToto: true,
          userName: 'TEST',
        },
      ];
      const players2: IPlayer[] = [
        {
          admin: false,
          email: 'test@test.com',
          firstName: 'test_player2',
          id: 1,
          lastName: 'tst_player',
          phoneNumber: '123',
          team: {
            id: 1,
            logo: 'test_logo',
            name: 'test_name',
          },
          totaalToto: true,
          userName: 'TEST',
        },
      ];
      const state: PlayersState = {
        players: players1,
        playerProfile: null,
      };
      const action: AllPlayersFetched = {
        type: ALL_PLAYERS_FETCHED,
        players: players2,
      };
      const newState: PlayersState = reducer(state, action);

      expect(newState.playerProfile).toBeNull;
      expect(newState.players?.length).toBe(players2.length);
      expect(newState.players).toEqual(players2);
      expect(newState.players).not.toEqual(players1);
    });
  });
  describe('if given PLAYER_PROFILE_FETCHED action type and initialState', () => {
    test('returns a new state with a player profile', () => {
      const playerProfile: IPlayerProfile = {
        admin: false,
        email: 'test@test.com',
        firstName: 'test_player',
        id: 1,
        lastName: 'tst_player',
        phoneNumber: '123',
        team: {
          id: 1,
          logo: 'test_logo',
          name: 'test_name',
        },
        totaalToto: true,
        userName: 'TEST',
        pastFixturesWithScores: null,
      };
      const initialState: PlayersState = {
        players: null,
        playerProfile: null,
      };
      const action: PlayerProfileFetched = {
        type: PLAYER_PROFILE_FETCHED,
        playerProfile,
      };
      const newState: PlayersState = reducer(initialState, action);

      expect(newState.playerProfile).toEqual(playerProfile);
      expect(newState.players).toBeNull;
    });
  });
  describe('if given PLAYER_PROFILE_FETCHED action type and a state with a profile', () => {
    test('returns the state with the new profile', () => {
      const players: IPlayer[] = [
        {
          admin: false,
          email: 'test@test.com',
          firstName: 'test_player',
          id: 1,
          lastName: 'tst_player',
          phoneNumber: '123',
          team: {
            id: 1,
            logo: 'test_logo',
            name: 'test_name',
          },
          totaalToto: true,
          userName: 'TEST',
        },
      ];
      const playerProfile1: IPlayerProfile = {
        admin: false,
        email: 'test@test.com',
        firstName: 'test_player1',
        id: 1,
        lastName: 'tst_player',
        phoneNumber: '123',
        team: {
          id: 1,
          logo: 'test_logo',
          name: 'test_name',
        },
        totaalToto: true,
        userName: 'TEST',
        pastFixturesWithScores: null,
      };
      const playerProfile2: IPlayerProfile = {
        admin: false,
        email: 'test@test.com',
        firstName: 'test_player2',
        id: 1,
        lastName: 'tst_player',
        phoneNumber: '123',
        team: {
          id: 1,
          logo: 'test_logo',
          name: 'test_name',
        },
        totaalToto: true,
        userName: 'TEST',
        pastFixturesWithScores: null,
      };
      const state: PlayersState = {
        players,
        playerProfile: playerProfile1,
      };
      const action: PlayerProfileFetched = {
        type: PLAYER_PROFILE_FETCHED,
        playerProfile: playerProfile2,
      };
      const newState: PlayersState = reducer(state, action);

      expect(newState.playerProfile).toEqual(playerProfile2);
      expect(newState.playerProfile).not.toEqual(playerProfile1);
      expect(newState.playerProfile?.firstName).toBe('test_player2');
      expect(newState.playerProfile?.firstName).not.toBe('test_player1');
      expect(newState.players).toEqual(players);
    });
  });
  describe('if given REMOVE_ALL_PLAYERS action type and a state', () => {
    test('returns the state with no profile and no players', () => {
      const players: IPlayer[] = [
        {
          admin: false,
          email: 'test@test.com',
          firstName: 'test_player',
          id: 1,
          lastName: 'tst_player',
          phoneNumber: '123',
          team: {
            id: 1,
            logo: 'test_logo',
            name: 'test_name',
          },
          totaalToto: true,
          userName: 'TEST',
        },
      ];
      const playerProfile: IPlayerProfile = {
        admin: false,
        email: 'test@test.com',
        firstName: 'test_player1',
        id: 1,
        lastName: 'tst_player',
        phoneNumber: '123',
        team: {
          id: 1,
          logo: 'test_logo',
          name: 'test_name',
        },
        totaalToto: true,
        userName: 'TEST',
        pastFixturesWithScores: null,
      };
      const state: PlayersState = {
        players,
        playerProfile,
      };
      const initialState: PlayersState = {
        players: null,
        playerProfile: null,
      };
      const action: RemoveAllPlayers = {
        type: REMOVE_ALL_PLAYERS,
      };
      const newState: PlayersState = reducer(state, action);

      expect(newState.playerProfile).toBeNull;
      expect(newState.players).toBeNull;
      expect(newState).toEqual(initialState);
    });
  });
});