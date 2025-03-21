import { Navbar, HeroSection, BookNow, Packages, Services, Gallery, About, Footer } from './components';
import ModalContextProvider from './context/Providers/ModalContext';

const App = () => {
  return (
    <>
      <ModalContextProvider>
        <Navbar />
      </ModalContextProvider>
      <HeroSection />
      <BookNow />
      <Packages />
      <Services />
      <Gallery />
      <About />
      <Footer />
    </>
  );
};

export default App;
