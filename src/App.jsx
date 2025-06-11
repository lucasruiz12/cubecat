import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Materials from './components/Materials/Materials';
import Contact from './components/Contact/Contact';
import colors from './styles/colors';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ backgroundColor: colors.crema }}>
      <Header />
      <Hero />
      <About />
      <Products />
      <Materials />
      <Contact />
    </div>
  );
}

export default App;
