import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/scss/index.scss';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
