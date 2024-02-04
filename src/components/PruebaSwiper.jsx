// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Header } from './Header/Header';
import { Temas } from './Temas/Temas';
import { Footer } from './Footer/Footer';
import { SwiperEffectGallery } from './SwiperEffectGallery/SwiperEffectGallery';
import { TemasPage } from './Temas/TemasPage';
import { ImageGallery } from './SwiperEffectGallery/ImageGallery';
import { useEffect, useState } from 'react';

export const PruebaSwiper = () => {
  const [images, setImages] = useState([]);
  const handleMenuItemClick = (slideIndex) => {
    // Lógica para navegar a la diapositiva correspondiente
    swiper.slideTo(slideIndex);
  };

  useEffect(() => {
    const imgs = [];
    for (let i = 1; i < 10; i++) {
      imgs.push(
        `/src/assets/cita-doble-imagenes/CitaDoble_${Math.floor(
          Math.random() * 40
        )}.jpg`
      );
    }

    setImages(imgs);
  }, []);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoHeight={true}
      speed={1000} // Ajusta la velocidad de transición (en milisegundos)
      effect='slide'
      touchRatio={0}
      style={{
        maxWidth: '100vw',
        width: '100%',
        minHeight: '100vh',
      }}
      navigation={false}
      hashNavigation={{
        watchState: true,
      }}
      scrollbar={false}
      onSwiper={(swiper) => (window.swiper = swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide data-hash='slide1'>
        <div className='app'>
          <Header menuClick={handleMenuItemClick} />
          <main>
            <Temas />
          </main>
          <Footer />
        </div>
      </SwiperSlide>
      <SwiperSlide data-hash='slide2'>
        <TemasPage menuClick={handleMenuItemClick} />
      </SwiperSlide>
      <SwiperSlide data-hash='slide3'>
        {/* <SwiperEffectGallery menuClick={handleMenuItemClick} /> */}
        <ImageGallery menuClick={handleMenuItemClick} images={images} />
      </SwiperSlide>
      <SwiperSlide data-hash='slide4'>
        <div className='app'>
          <Header menuClick={handleMenuItemClick} />
          <main>
            <Temas />
          </main>
          <Footer />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
