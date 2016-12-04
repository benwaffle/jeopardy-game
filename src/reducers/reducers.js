import { combineReducers } from 'redux';
import {
  LOAD_GAME_DATA,
  ADD_PLAYER,
  UPDATE_SCORE,
  UPDATE_LAST_CORRECT_PLAYER,
} from '../actions/actions';

const INITIAL_STATE = {
  game: {
    title: "",
    categories: {}
  },
  players: [],
  lastCorrectPlayer: ""
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LAST_CORRECT_PLAYER:
      console.log("here", action);
      return {
        ...state,
        lastCorrectPlayer: action.player
      };
    case UPDATE_SCORE:
      let index = state.players.findIndex(player => {
        return player.name === action.player
      });
      return {
        ...state,
        players: [
          ...state.players.slice(0, index),
          {
            name: action.player,
            score: state.players[index].score + action.value
          },
          ...state.players.slice(index + 1)
        ]
      };
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.player,
            score: action.score
          }
        ]
      };
    case LOAD_GAME_DATA:
      return {
        ...state,
        game: {
          title: "Music",
          categories: {
            ...action.data.categories
          }
        }
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  appReducer
});

export default rootReducer;