import { FlatList } from 'native-base';
import { Episode } from '../../api/types';
import { SeasonEpisode } from '../season-episode';

interface EpisodesListProps {
  episodes: Episode[];
}

const EpisodesList = ({ episodes }: EpisodesListProps) => {
  return (
    <FlatList
      width="100%"
      data={episodes}
      renderItem={({ item: episode }) => <SeasonEpisode episode={episode} />}
    />
  );
};

export { EpisodesList };
