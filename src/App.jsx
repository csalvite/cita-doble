import './App.css';
// import { FullPageScroll } from './components/FullPageScroll';
import { Header } from './components/Header/Header';
import SpotifyDataComponent from './components/SpotifyDataComponent';
import { Temas } from './components/Temas/Temas';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Temas />
      </main>
      <SpotifyDataComponent />
      {/* <FullPageScroll /> */}
    </div>
  );
}

export default App;
