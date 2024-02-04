import { HeaderBar } from '../Header/HeaderBar';
import { Temas } from './Temas';

export const TemasPage = ({ menuClick = null }) => {
  return (
    <div className='app'>
      <Temas />
    </div>
  );
};
