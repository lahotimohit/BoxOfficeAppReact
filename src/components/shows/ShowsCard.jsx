const ShowsCard = ({ name, image, summary, id }) => {
  const summaryStriped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStriped}</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button">Rate Me</button>
      </div>
    </div>
  );
};

export default ShowsCard;
