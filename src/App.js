import './App.css';
import Navbar from './pages/Navbar/navbar';
import Contact from './pages/contact/contact';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';

import Services from './pages/Services/services';
import Gallary from './pages/Gallary/gallary';
import ScrollToTop from './components/scrollToTop'
import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mariyam.B</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
         
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={<Gallary />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
