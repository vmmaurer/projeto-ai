import React from 'react'
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
  return (
    <div className="relative">
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
