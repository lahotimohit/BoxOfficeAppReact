import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
import { useParams } from 'react-router-dom';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }
    fetchData();
  }, [showId]);

  return { showData, showError };
};

const Show = () => {
  const { showId } = useParams();
  const { showData, showError } = useShowById(showId);

  if (showError) {
    return <div>Error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got Show Data: {showData.name}</div>;
  }

  return <div>Please wait! Your data is loading... </div>;
};

export default Show;
