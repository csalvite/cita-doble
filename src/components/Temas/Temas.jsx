import './Temas.css';
import { TemasList } from './TemasList';

export const Temas = () => {
  return (
    <section id='temas'>
      <h2>Os Nosos Temas</h2>
      <div className='container-80 grid-col-2'>
        <div className='cifras-container'>
          <h3>As Nosas Cifras</h3>
        </div>
        <TemasList />
      </div>
    </section>
  );
};
