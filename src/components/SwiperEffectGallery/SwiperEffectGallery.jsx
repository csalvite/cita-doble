import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import imagenUrl from '../../assets/cita-doble-imagenes/CitaDoble_1.jpg';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/pagination'; // Importa los estilos de la paginación si los estás utilizando
import 'swiper/css/navigation';

import './SwiperEffectGallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { HeaderBar } from '../Header/HeaderBar';

export const SwiperEffectGallery = ({ menuClick }) => {
  return (
    <div className='gallery-container'>
      <HeaderBar menuClick={menuClick} />
      <div className='swiper-gallery-container'>
        <Swiper
          fill={'row'}
          rows={2}
          spaceBetween={10} // Espacio entre las imágenes
          slidesPerView={'auto'} // Número de slides por vista (columnas)
        >
          <SwiperSlide>
            <img src={imagenUrl} />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
