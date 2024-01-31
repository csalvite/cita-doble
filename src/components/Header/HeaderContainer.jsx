import './Header.css';
import logo from '../../assets/logo-name.png';

export const HeaderContainer = () => {
  const handleOnClickScroll = () => {
    const temasElement = document.getElementById('temas');

    temasElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='header-container'>
      <div className='img-logo-container'>
        <img src={logo} alt='logo-cita-doble' />
      </div>
      <i
        id='chevron-down'
        onClick={handleOnClickScroll}
        className='fa-solid fa-chevron-down'
      ></i>
    </section>
  );
};
