export interface PlaylistType {
  name: string;
  cover: string;
  created: {
    by: string;
    on: Date;
  };
  songs: Array<string>;
}
