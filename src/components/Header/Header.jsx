import { HeaderBar } from './HeaderBar';
import { HeaderContainer } from './HeaderContainer';
import './Header.css';

export const Header = ({ menuClick }) => {
  return (
    <header>
      <HeaderBar menuClick={menuClick} />
      <HeaderContainer />
    </header>
  );
};
