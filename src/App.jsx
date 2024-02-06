import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/HomeBackUp';
import { PruebaSwiper } from './components/PruebaSwiper';
import { SobreNos } from './components/SobreNos/SobreNos';
import { Temas } from './components/Temas/Temas';
import { usePhotos } from './hooks/usePhotos';
import loadingSpinner from './assets/tail-spin.svg';
import { useEffect } from 'react';

function App() {
  const { photos, error, loading } = usePhotos();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='app'>
      {/* <PruebaSwiper /> */}
      {loading ? (
        <img src={loadingSpinner} alt='loading...' />
      ) : (
        <Home photos={photos} error={error} loading={loading} />
      )}
    </div>
  );
}

export default App;

/*
      <Header />
      <main>
        <Temas />
        
      </main>
      <Footer />*/
