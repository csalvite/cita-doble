import './App.css';
import { Header } from './components/Header/Header';
import { SobreNos } from './components/SobreNos/SobreNos';
import { Temas } from './components/Temas/Temas';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Temas />
        <SobreNos />
      </main>
    </div>
  );
}

export default App;
