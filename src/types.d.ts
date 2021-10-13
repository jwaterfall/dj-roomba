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
