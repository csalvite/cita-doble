import './Header.css';
import logo from '../../assets/logo.png';

export const HeaderBar = () => {
  return (
    <section id='header-bar'>
      <img src={logo} alt='logo-cita-doble' />

      <nav>
        <ul>
          <li>
            <a className='enlace' href='#inicio'>
              Inicio
            </a>
          </li>
          <li>
            <a className='enlace' href='#temas'>
              Temas
            </a>
          </li>
          <li>
            <a className='enlace' href='#galeria'>
              Galería
            </a>
          </li>
          <li>
            <a className='enlace' href='#sobre-nos'>
              Sobre Nós
            </a>
          </li>
        </ul>
      </nav>

      <button>Contacta</button>
    </section>
  );
};
