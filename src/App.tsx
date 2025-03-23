import { Navbar, HeroSection, BookNow, Packages, Services, Gallery, About, Footer } from './components';
import AuthContextProvider from './context/Providers/AuthContext';
import ModalContextProvider from './context/Providers/ModalContext';

const App = () => {
  return (
    <>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </>
  );
};

export default App;
