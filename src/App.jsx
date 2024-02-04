import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/HomeBackUp';
import { PruebaSwiper } from './components/PruebaSwiper';
import { SobreNos } from './components/SobreNos/SobreNos';
import { Temas } from './components/Temas/Temas';

function App() {
  return (
    <div className='app'>
      {/* <PruebaSwiper /> */}
      <Home />
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
