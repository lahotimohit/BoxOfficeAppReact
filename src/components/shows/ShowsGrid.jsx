import ShowsCard from './ShowsCard';

const ShowsGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          summary={data.show.summary}
          id={data.show.id}
          image={
            data.show.image ? data.show.image.medium : '/not-found-img.png'
          }
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
