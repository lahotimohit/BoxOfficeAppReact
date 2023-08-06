import { useQuery } from '@tanstack/react-query';
import { getShowByIds } from '../api/tvmaze';
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
    return <div>No Shows were starred</div>;
  }
  if (starredShowsError) {
    return <div>Error Occured: {starredShowsError.message}</div>;
  }

  return <div>Please Wait, your shows are loading....</div>;
};

export default Starred;
