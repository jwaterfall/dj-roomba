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
