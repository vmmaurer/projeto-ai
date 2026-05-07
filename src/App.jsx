import React, { useEffect } from 'react'
import StickyNav from './components/StickyNav'
import HeroSection from './components/HeroSection'
import OQueFazemos from './components/OQueFazemos'
import Diferenciais from './components/Diferenciais'
import Processo from './components/Processo'
import AntesDepois from './components/AntesDepois'
import Galeria from './components/Galeria'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {



  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 30000); // tempo de inatividade (30s)
    };

    const events = ["scroll", "click", "mousemove", "touchstart"];

    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    resetTimer(); // inicia o timer

    return () => {
      clearTimeout(timeout);
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);

  return (
    <div className="relative pt-20 md:pt-[130px]" style={{ paddingTop: '100px' }}>
      <StickyNav />
      
      <div id="hero"><HeroSection /></div>
      <div id="solucoes"><OQueFazemos /></div>
      <div id="diferenciais"><Diferenciais /></div>
      <div id="processo"><Processo /></div>
      <div id="antes-depois"><AntesDepois /></div>
      <div id="galeria"><Galeria /></div>
      <div id="contato"><CTASection /></div>
      <Footer />
    </div>
  )
}