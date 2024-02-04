import { HeaderBar } from '../Header/HeaderBar';
import './SwiperEffectGallery.css';
import { Images } from './Images';

export const ImageGallery = ({ menuClick = null, images }) => {
  return (
    <div className='gallery-container'>
      <section id='gallery-grid-images'>
        <h2>Galería de Imaxes</h2>
        <div className='grid-images'>
          {images?.map((src, index) => {
            return (
              <div
                key={index}
                className={`image-div scale image-transition-${index} show`}
              >
                <Images src={src} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
