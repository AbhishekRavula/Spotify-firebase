import { createSelector } from "reselect";
import { StateType } from "../reducers/rootReducer";

const _getUserPlaylists = (state: StateType) => state.playlist.playlists;

export const getUserPlaylists = createSelector([_getUserPlaylists], userPlaylists => userPlaylists);
