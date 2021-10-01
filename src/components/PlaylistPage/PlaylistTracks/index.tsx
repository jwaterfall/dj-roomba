import React, {FC} from 'react';
import dayjs from 'dayjs';
import {
  Background,
  BackgroundGradient,
  Content,
  RowHeader,
  Header,
  Row,
  Detail,
  Track,
  TitleSection,
  TrackImage,
  TitleSectionDetails,
  Title,
} from './styles';

interface Props {
  playlist: SpotifyApi.SinglePlaylistResponse;
}

const PlaylistTracks: FC<Props> = ({playlist}) => {
  return (
    <Background>
      <BackgroundGradient />
      <Content>
        <RowHeader>
          <Header>#</Header>
          <Header>title</Header>
          <Header>album</Header>
          <Header>date added</Header>
          <Header>time</Header>
        </RowHeader>

        {playlist.tracks.items.map(
          (trackWrapper: SpotifyApi.PlaylistTrackObject, i) => {
            const track = trackWrapper.track;
            const imageURL: string | undefined = track.album.images[0].url;

            return (
              <Track>
                <Detail>{i + 1}</Detail>
                <TitleSection>
                  <TrackImage src={imageURL} />
                  <TitleSectionDetails>
                    <Title>{track.name}</Title>
                    <Detail>
                      {track.artists.map((artist) => artist.name).join(', ')}
                    </Detail>
                  </TitleSectionDetails>
                </TitleSection>
                <Detail>{track.album.name}</Detail>
                <Detail>
                  {dayjs(trackWrapper.added_at).format('MMM D, YYYY')}
                </Detail>
                <Detail>
                  {dayjs.duration(track.duration_ms).format('m:ss')}
                </Detail>
              </Track>
            );
          },
        )}
      </Content>
    </Background>
  );
};

export default PlaylistTracks;
