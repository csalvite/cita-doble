import './Header.css';
import logo from '../../assets/logo.png';

export const HeaderBar = ({ menuClick }) => {
  return (
    <section id='header-bar'>
      <img src={logo} alt='logo-cita-doble' />

      <nav>
        <ul>
          <li onClick={() => menuClick(0)}>
            <a className='enlace'>Inicio</a>
          </li>
          <li onClick={() => menuClick(1)}>
            <a className='enlace'>Temas</a>
          </li>
          <li onClick={() => menuClick(2)}>
            <a className='enlace'>Galería</a>
          </li>
          <li onClick={() => menuClick(3)}>
            <a className='enlace'>Sobre Nós</a>
          </li>
        </ul>
      </nav>

      <button>Contacta</button>
    </section>
  );
};
