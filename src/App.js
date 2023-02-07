import Navigation from './components/navbar/Navigation';
import Header from './components/header/Header';
import About from './pages/About';
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/scss/index.scss';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
