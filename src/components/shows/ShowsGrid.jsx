import { useStarredShows } from '../../lib/useStarredShows';
import ShowsCard from './ShowsCard';
import { FlexGrid } from '../common/FlexGrid';

const ShowsGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };
  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          summary={data.show.summary}
          id={data.show.id}
          image={
            data.show.image ? data.show.image.medium : '/not-found-img.png'
          }
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowsGrid;
