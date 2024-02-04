import {
  Animator,
  Fade,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
} from 'react-scroll-motion';
import { Header } from './Header/Header';
import { Temas } from './Temas/Temas';
import { Footer } from './Footer/Footer';
import { TemasPage } from './Temas/TemasPage';
import { ImageGallery } from './SwiperEffectGallery/ImageGallery';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [images, setImages] = useState([]);
  const handleMenuItemClick = (slideIndex) => {
    // Lógica para navegar a la diapositiva correspondiente
    swiper.slideTo(slideIndex);
  };

  useEffect(() => {
    const imgs = [];
    for (let i = 1; i <= 10; i++) {
      imgs.push(
        `/src/assets/cita-doble-imagenes/CitaDoble_${Math.round(
          Math.random() * 39
        )}.jpg`
      );
    }

    setImages(imgs);
  }, []);

  return (
    <ScrollContainer className='main'>
      {/* <div className='app'> */}
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -300))}>
          <Header menuClick={handleMenuItemClick} />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={MoveIn(-300, 0)}>
          <section id='temas'>
            <Temas />
          </section>
        </Animator>
      </ScrollPage>

      <ImageGallery images={images} />

      <Footer />
    </ScrollContainer>
  );
};
