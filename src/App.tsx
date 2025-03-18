import { Navbar, HeroSection, BookNow, Packages, Services, Gallery, About, Footer } from './components';
import Modal from './components/General/Modal';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookNow />
      <Packages />
      <Services />
      <Gallery />
      <About />
      <Footer />
      <Modal />
    </>
  );
};

export default App;
