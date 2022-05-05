import produce from "immer";
import { PlaylistActions } from "../actions/playlistActions";

export interface IPlaylistState {
  playlists: Array<string>;
}

const playlistInitialState: IPlaylistState = {
  playlists: []
};

export const playlistReducer = produce((draft: IPlaylistState, action) => {
  switch (action.type) {
    case PlaylistActions.getUserPlaylistsSuccess:
      draft.playlists = action.payload.playlists;
      break;
    default:
      return draft;
  }
}, playlistInitialState);
