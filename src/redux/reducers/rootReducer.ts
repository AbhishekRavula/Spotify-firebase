import { combineReducers } from "redux";
import { CommonActionTypes } from "../actions/commonActions";
import { IPlaylistState, playlistReducer } from "./playlistReducer";
import { authReducer, IAuthState } from "./authReducer";

export interface StateType {
  auth: IAuthState;
  playlist: IPlaylistState;
}

const appReducer = combineReducers({
  playlist: playlistReducer,
  auth: authReducer
});

export type AppState = ReturnType<typeof appReducer>;

const rootReducer = (state: AppState, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === CommonActionTypes.clearReduxSotre) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
