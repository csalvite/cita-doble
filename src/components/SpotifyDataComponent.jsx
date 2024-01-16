import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

const {
  VITE_REACT_APP_CLIENT_ID,
  VITE_REACT_APP_CLIENT_SECRET,
  VITE_REACT_APP_ARTIST_ID,
} = import.meta.env;

const SpotifyDataComponent = () => {
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
                console.log('Response topTracks', topTracksResponse);
                const totalReproductions = topTracksResponse.data.tracks.reduce(
                  (acc, track) => acc + track.popularity,
                  0
                );

                console.log('Total reproduccions', totalReproductions);
                setArtistData({
                  name: artistResponse.data.name,
                  followers: artistResponse.data.followers.total,
                  totalReproductions,
                  numberOfSongs: topTracksResponse.data.tracks.length,
                  // monthlyListeners: artistResponse.data.followers.listeners,
                  // about: artistResponse.data.info.biography,
                  // Puedes agregar más información según tus necesidades
                });
                // setArtistData((prevState) => ({
                //   ...prevState,
                //   totalReproductions,
                //   numberOfSongs: topTracksResponse.data.tracks.length,
                // }));
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

  return (
    <div>
      {artistData ? (
        <div>
          <h2>{artistData.name}</h2>
          <p>Seguidores: {artistData.followers}</p>
          <p>Total de reproducciones: {artistData.totalReproductions}</p>
          <p>Número de canciones: {artistData.numberOfSongs}</p>
          {/* Otros detalles del artista que desees mostrar */}
        </div>
      ) : (
        <p>Cargando información del artista...</p>
      )}
    </div>
  );
};

export default SpotifyDataComponent;
