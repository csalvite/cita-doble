import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

const {
  VITE_REACT_APP_CLIENT_ID,
  VITE_REACT_APP_CLIENT_SECRET,
  VITE_REACT_APP_ARTIST_ID,
} = import.meta.env;

const useArtistData = () => {
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const credentials = btoa(
      `${VITE_REACT_APP_CLIENT_ID}:${VITE_REACT_APP_CLIENT_SECRET}`
    );

    const requestData = {
      grant_type: 'client_credentials',
    };

    const authOptions = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(requestData),
    };

    axios(authOptions)
      .then((response) => {
        const accessToken = response.data.access_token;

        axios
          .get(
            `https://api.spotify.com/v1/artists/${VITE_REACT_APP_ARTIST_ID}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((artistResponse) => {
            // Obtener las top tracks del artista
            axios
              .get(
                `https://api.spotify.com/v1/artists/${VITE_REACT_APP_ARTIST_ID}/top-tracks?country=US`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              )
              .then((topTracksResponse) => {
                const totalReproductions = topTracksResponse.data.tracks.reduce(
                  (acc, track) => acc + track.popularity,
                  0
                );

                setArtistData({
                  name: artistResponse.data.name,
                  followers: artistResponse.data.followers.total,
                  totalReproductions,
                  numberOfSongs: topTracksResponse.data.tracks.length,
                  // monthlyListeners: artistResponse.data.followers.listeners,
                  // about: artistResponse.data.info.biography,
                  // Puedes agregar más información según tus necesidades
                });
              })
              .catch((error) => {
                console.error(error.response.data);
              });
          })
          .catch((error) => {
            console.error(error.response.data);
          });
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }, []);

  console.log('DAta artista', artistData);

  return { artistData };
};

export default useArtistData;
