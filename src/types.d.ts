interface Artist extends SpotifyApi.SingleArtistResponse {
  topTracks: SpotifyApi.TrackObjectFull[];
  topAlbums: SpotifyApi.AlbumObjectSimplified[];
  topSingles: SpotifyApi.AlbumObjectSimplified[];
}

interface QueuedTrack {
  track: string;
  title: string;
  identifier: string;
  author: string;
  duration: number;
  isSeekable: boolean;
  isStream: boolean;
  uri: string;
  thumbnail: string | null;
  requester: unknown | null;
  displayThumbnail(size?: Sizes): string;
}
