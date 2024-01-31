import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { SobreNos } from './components/SobreNos/SobreNos';
import { Temas } from './components/Temas/Temas';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Temas />
        {/* <SobreNos /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
