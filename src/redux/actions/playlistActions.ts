export enum PlaylistActionTypes {
  getUserPlaylists = "getUserPlaylists",
  getUserPlaylistsSuccess = "getUserPlaylistsSuccess"
}

const getUserPlaylists = (userId: string) => ({
  type: PlaylistActionTypes.getUserPlaylists,
  payload: { userId }
});

const getUserPlaylistsSuccess = (playlists: any) => ({
  type: PlaylistActionTypes.getUserPlaylistsSuccess,
  payload: { playlists }
});

export const PlaylistActions = {
  getUserPlaylists,
  getUserPlaylistsSuccess
};
