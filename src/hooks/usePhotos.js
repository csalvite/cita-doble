import axios from 'axios';
import { useEffect, useState } from 'react';

const { VITE_REACT_APP_BACK } = import.meta.env;

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(VITE_REACT_APP_BACK, {
          headers: {
            'Content-Type': `application/json`,
          },
        });

        const { data } = response.data;

        setPhotos(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getPhotos();
  }, []);
  return { photos, error, loading };
};
