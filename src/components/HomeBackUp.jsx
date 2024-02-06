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

export const Home = ({ photos, error, loading }) => {
  const handleMenuItemClick = (slideIndex) => {
    // Lógica para navegar a la diapositiva correspondiente
    swiper.slideTo(slideIndex);
  };

  return (
    <ScrollContainer className='main'>
      {/* <div className='app'> */}
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -300))}>
          <Header menuClick={handleMenuItemClick} />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator style={{ height: '100%' }} animation={MoveIn(-300, 0)}>
          <section id='temas'>
            <Temas />
          </section>
        </Animator>
      </ScrollPage>
      <ScrollPage style={{ height: '100%' }}>
        <Animator animation={Fade()} style={{ paddingTop: '5rem' }}>
          <ImageGallery photos={photos} error={error} loading={loading} />
        </Animator>
      </ScrollPage>
      <ScrollPage style={{ height: '100%' }}>
        <Animator>
          <Footer />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};
