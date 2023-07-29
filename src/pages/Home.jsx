import { useState } from 'react';
import { searchForShows, searchForActors } from '../api/tvmaze';
import SerachForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiError(null);

      let result;
      if (searchOption == 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForActors(q);
      }
      setApiData(result);
    } catch (error) {
      setApiError(error);
    }
  };

  const renderApi = () => {
    if (apiError) {
      return <div>Error Message: {apiError.message}</div>;
    }

    if (apiData?.length == 0) {
      return <div>Not found any result....</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SerachForm onSearch={onSearch} />
      <div>{renderApi()}</div>
    </div>
  );
};

export default Home;
