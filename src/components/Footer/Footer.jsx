import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-contact'>
        <p>
          Contratacións <i className='fa-solid fa-envelope'></i>:{' '}
          <span>modus.music.gal@gmail.com</span>
        </p>
      </div>
      <div className='footer-rrss'>
        <ul>
          <li>
            <i className='fa-brands fa-youtube'></i>
          </li>
          <li>
            <i className='fa-brands fa-instagram'></i>
          </li>
          <li>
            <i className='fa-brands fa-tiktok'></i>
          </li>
          <li>
            <i className='fa-brands fa-spotify'></i>
          </li>
          <li>
            <i className='fa-brands fa-square-x-twitter'></i>
          </li>
        </ul>
      </div>

      <div className='footer-copy'>Copyright &copy; 2024 - Cita Doble</div>
    </footer>
  );
};
