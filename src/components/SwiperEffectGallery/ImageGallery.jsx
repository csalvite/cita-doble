import { HeaderBar } from '../Header/HeaderBar';
import './SwiperEffectGallery.css';
import { Images } from './Images';
import { usePhotos } from '../../hooks/usePhotos';

const { VITE_REACT_APP_BACKIMAGE } = import.meta.env;

export const ImageGallery = ({ menuClick = null, photos, error, loading }) => {
  return (
    <div className='gallery-container'>
      <section id='gallery-grid-images'>
        {loading ? (
          <p>CARGANDO</p>
        ) : (
          <>
            <h2>Galería de Imaxes</h2>
            <div className='grid-images'>
              {error && <p>Error al obtener las imágenes.</p>}
              {photos.length > 0 &&
                photos?.map((photo) => {
                  return (
                    <div
                      key={photo.id}
                      className={`image-div scale image-transition-${photo.id} show`}
                    >
                      {/* <Images src={photo.name} /> */}
                      <img
                        src={`${VITE_REACT_APP_BACKIMAGE}/${photo.name}`}
                        alt={`Imagen ${photo.id} `}
                      />
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </section>
    </div>
  );
};
