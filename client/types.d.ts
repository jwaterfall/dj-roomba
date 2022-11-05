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
  requester: {
    id: string;
    username: string;
    avatar: string;
  };
  displayThumbnail(size?: Sizes): string;
}
