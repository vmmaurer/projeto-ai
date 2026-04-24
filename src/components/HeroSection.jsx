import React, { useState } from 'react'
import Logo from './Logo'
import ArcCarousel from './ArcCarousel'
import ProductModal from './ProductModal'
import { products } from '../data/products'

export default function HeroSection() {
  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #012488 0%, #011c6b 35%, #010f40 75%, #010827 100%)',
      }}
    >
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: '-15%',
            left: '-15%',
            background: 'radial-gradient(circle, rgba(46,164,255,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            bottom: '-10%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(0,88,245,0.1) 0%, transparent 70%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Top header bar */}
      <header className="relative z-10 flex items-center justify-between px-10 pt-8 pb-4">
      </header>

      {/* Hero headline */}
      <div className="relative z-10 text-center px-8 pt-8 pb-4">
        <p className="text-glass-300 text-sm font-semibold tracking-[0.35em] uppercase mb-3">
          Qualidade que transforma espaços
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4">
          <span className="text-white">Vidros de </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #75c2ff 50%, #2ea4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Alto Padrão
          </span>
        </h1>
        <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
          Explore nossas soluções e descubra como o vidro pode transformar arquitetura e design
        </p>
      </div>

      {/* Carousel */}
      <div className="relative z-10 flex-1 flex items-center mt-2">
        <div className="w-full">
          <ArcCarousel items={products} onCardTap={setActiveProduct} />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex flex-col items-center pb-8 gap-2">
        <p className="text-white/35 text-xs font-medium tracking-widest uppercase">
          Deslize para explorar
        </p>
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 7L10 13L16 7" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Product Modal */}
      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </section>
  )
}
