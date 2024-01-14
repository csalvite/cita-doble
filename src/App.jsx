import './App.css';
import { Header } from './components/Header/Header';
import { Temas } from './components/Temas/Temas';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Temas />
      </main>
    </div>
  );
}

export default App;
