import './Header.css';
import logo from '../../assets/logo.png';

export const HeaderContainer = () => {
  return (
    <section id='header-container'>
      {/* <h1>Cita Doble</h1> */}
      <div className='img-logo-container'>
        <img src={logo} alt='logo-cita-doble' />
      </div>
      <i id='chevron-down' className='fa-solid fa-chevron-down'></i>
    </section>
  );
};
