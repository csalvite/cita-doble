import { Header } from './Header/Header';
import { Temas } from './Temas/Temas';
import { Footer } from './Footer/Footer';
import { ImageGallery } from './SwiperEffectGallery/ImageGallery';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [images, setImages] = useState([]);
  const handleMenuItemClick = (slideIndex) => {
    // Lógica para navegar a la diapositiva correspondiente
    swiper.slideTo(slideIndex);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('entry', entry);

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');

  console.log('todos', hiddenElements);

  hiddenElements.forEach((elm) => observer.observe(elm));

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
    <div className='main'>
      <Header menuClick={handleMenuItemClick} />

      <main>
        <section id='temas' className='hidden'>
          <Temas />
        </section>

        <section className='hidden'>
          <ImageGallery images={images} />
        </section>
      </main>

      <div className='hidden'>
        <Footer />
      </div>
    </div>
  );
};
