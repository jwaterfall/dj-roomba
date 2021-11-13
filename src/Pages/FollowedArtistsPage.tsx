import { FC } from 'react';

import Cards from '../components/Cards';
import useFollowedArtists from '../queries/useFollowedArtists';

const FollowedArtistsPage: FC = () => {
  const { data: artists } = useFollowedArtists();

  return artists ? <Cards variant="artists" artists={artists} /> : <></>;
};

export default FollowedArtistsPage;
