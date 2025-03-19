import { Navbar, HeroSection, BookNow, Packages, Services, Gallery, About, Footer } from './components';
import RegisterForm from './components/Register/RegisterForm';

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
      <RegisterForm />
    </>
  );
};

export default App;
