import { HeaderBar } from '../Header/HeaderBar';
import './SwiperEffectGallery.css';
import { Images } from './Images';
import imagen1 from '../../assets/cita-doble-imagenes/CitaDoble_1.jpg';
import imagen2 from '../../assets/cita-doble-imagenes/CitaDoble_20.jpg';
import imagen3 from '../../assets/cita-doble-imagenes/CitaDoble_36.jpg';
import imagen4 from '../../assets/cita-doble-imagenes/CitaDoble_7.jpg';
import imagen5 from '../../assets/cita-doble-imagenes/CitaDoble_14.jpg';
import imagen6 from '../../assets/cita-doble-imagenes/CitaDoble_18.jpg';
import imagen7 from '../../assets/cita-doble-imagenes/CitaDoble_3.jpg';
import imagen8 from '../../assets/cita-doble-imagenes/CitaDoble_21.jpg';
import imagen9 from '../../assets/cita-doble-imagenes/CitaDoble_25.jpg';
import imagen10 from '../../assets/cita-doble-imagenes/CitaDoble_27.jpg';
import imagen11 from '../../assets/cita-doble-imagenes/CitaDoble_4.jpg';
import imagen12 from '../../assets/cita-doble-imagenes/CitaDoble.jpg';

export const ImageGallery = ({ menuClick = null }) => {
  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    imagen11,
    imagen12,
  ];

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
