import Navigation from './components/navbar/Navigation';
import Header from './components/header/Header';
import About from './pages/About';
import Footer from './components/footer/Footer';
import Contact from './components/constactForm/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import WorkWithUs from './components/workWithUs/WorkWithUs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/scss/index.scss';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Services />
      <WorkWithUs />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
