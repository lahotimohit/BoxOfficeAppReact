import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForActors } from '../api/tvmaze';
import SerachForm from '../components/SearchForm';
import { TextCenter } from '../components/common/TextCenter';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import styled, { css, ThemeProvider } from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: 'palevioletred';
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}

  ${props =>
    props.fontsize &&
    css`
      font-size: ${props.fontsize}px;
    `}
`;

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
      return <TextCenter>Error Message: {apiError.message}</TextCenter>;
    }

    if (apiData?.length == 0) {
      return <TextCenter>Not found any result....</TextCenter>;
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
