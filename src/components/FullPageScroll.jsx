import {
  FullPageSections,
  Fullpage,
  FullpageNavigation,
  FullpageSection,
} from '@ap.cx/react-fullpage';
import { Header } from './Header/Header';
import { Temas } from './Temas/Temas';

export const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ minHeigth: '100vh' }}>
          <Header />
        </FullpageSection>
        <FullpageSection style={{ minHeigth: '100vh' }}>
          <Temas />
        </FullpageSection>
        <FullpageSection style={{ minHeigth: '100vh' }}>
          <h1>Scroll 3</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};
