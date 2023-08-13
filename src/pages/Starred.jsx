import { useQuery } from '@tanstack/react-query';
import { getShowByIds } from '../api/tvmaze';
import { TextCenter } from '../components/common/TextCenter';
import { useStarredShows } from '../lib/useStarredShows';
import ShowsGrid from '../components/shows/ShowsGrid.jsx';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows} />;
  }

  if (starredShows?.length == 0) {
    return <TextCenter>No Shows were starred</TextCenter>;
  }
  if (starredShowsError) {
    return <TextCenter>Error Occured: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Please Wait, your shows are loading....</TextCenter>;
};

export default Starred;
