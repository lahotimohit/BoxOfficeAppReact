import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForActors } from '../api/tvmaze';
import SerachForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForActors(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
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
