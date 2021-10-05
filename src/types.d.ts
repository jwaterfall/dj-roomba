interface Playlist extends SpotifyApi.SinglePlaylistResponse {
  tracks: SpotifyApi.PlaylistTrackObject[];
}

interface Album extends SpotifyApi.SingleAlbumResponse {
  tracks: SpotifyApi.TrackObjectSimplified[];
}

interface Artist extends SpotifyApi.SingleArtistResponse {
  topTracks: SpotifyApi.TrackObjectFull[];
  topAlbums: SpotifyApi.AlbumObjectSimplified[];
  topSingles: SpotifyApi.AlbumObjectSimplified[];
}

interface ProcessedTrack {
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
  spotifyId?: string;
}
