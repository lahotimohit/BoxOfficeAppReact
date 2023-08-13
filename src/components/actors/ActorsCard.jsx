import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
const ActorsCard = ({ name, image, country, birthday, gender, deathday }) => {
  return (
    <div>
      <SearchCard>
        <SearchImgWrapper>
          <img src={image} />
        </SearchImgWrapper>
      </SearchCard>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {!!birthday && <p>`Born on {birthday}</p>}
      <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorsCard;
