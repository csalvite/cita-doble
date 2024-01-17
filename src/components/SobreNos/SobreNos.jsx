import useArtistData from '../../hooks/useArtistData';
import './SobreNos.css';

export const SobreNos = () => {
  const { artistData } = useArtistData();

  return (
    <section id='sobre-nos'>
      <h3>As Nosas Cifras</h3>
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
    </section>
  );
};
