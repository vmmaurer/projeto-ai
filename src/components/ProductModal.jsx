import React, { useEffect, useRef, useState } from 'react'

export default function ProductModal({ product, onClose }) {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const [touchStartY, setTouchStartY] = useState(null)

  // Keyboard escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Swipe-to-close gesture
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchEnd = (e) => {
    if (touchStartY === null) return
    const touchEndY = e.changedTouches[0].clientY
    const deltaY = touchEndY - touchStartY

    // Swipe down more than 100px closes the modal
    if (deltaY > 100) {
      onClose()
    }
    setTouchStartY(null)
  }

  if (!product) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-end md:justify-center p-0 md:p-6"
      style={{ animation: 'fadeIn 0.25s ease forwards' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop with blur and dark overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-lg"
        onPointerDown={onClose}
        style={{ animation: 'fadeIn 0.25s ease forwards' }}
      />

      {/* Modal Panel - Fullscreen on mobile, centered on desktop */}
      <div
        ref={contentRef}
        className="relative w-full md:max-w-6xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row h-full md:max-h-[92vh] shadow-2xl"
        style={{
          background: 'linear-gradient(155deg, rgba(1, 15, 64, 0.98) 0%, rgba(30, 58, 108, 0.99) 100%)',
          border: '1px solid rgba(117,194,255,0.2)',
          animation: 'modalSlideUp 0.4s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Large Close Button - Touch-optimized */}
        <button
          className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex items-center justify-center rounded-full"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '2px solid rgba(255,255,255,0.3)',
            width: '72px',
            height: '72px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease',
          }}
          onPointerDown={onClose}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.6)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.4)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
          }}
          aria-label="Fechar"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8 8L28 28M28 8L8 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Left: Large Image Section */}
        <div className="w-full md:w-1/2 flex-shrink-0 h-72 md:h-full relative overflow-hidden group">
          <img
            src={product.modalImage}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ minHeight: '300px' }}
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Right: Content Section */}
        <div
          className="w-full md:w-1/2 overflow-y-auto flex flex-col gap-5 md:gap-6 p-6 md:p-10 lg:p-12"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Category + Title */}
          <div className="space-y-3">
            <p className="text-glass-300 text-xs md:text-sm font-semibold tracking-widest uppercase">
              {product.subtitle}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {product.title}
            </h2>
          </div>

          {/* Main Description */}
          <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed font-light">
            {product.description}
          </p>

          {/* Applications Section */}
          <div className="space-y-3">
            <h3 className="text-glass-300 text-xs md:text-sm font-bold tracking-widest uppercase">
              Aplicações
            </h3>
            <div className="flex flex-col gap-2 md:gap-3">
              {product.applications.map((app, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'rgba(117,194,255,0.08)', border: '1px solid rgba(117,194,255,0.15)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-glass-300 flex-shrink-0" />
                  <span className="text-white/85 text-sm md:text-base font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits/Diferenciais Section */}
          <div className="space-y-3">
            <h3 className="text-glass-300 text-xs md:text-sm font-bold tracking-widest uppercase">
              Diferenciais
            </h3>
            <div className="grid grid-cols-1 gap-2 md:gap-3">
              {product.benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg p-3 md:p-4 transition-colors duration-200 hover:bg-glass-300/10"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" stroke="#75c2ff" strokeWidth="2" opacity="0.3" />
                    <path d="M8 12L11 15L16 9" stroke="#75c2ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white/85 text-sm md:text-base leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom spacing for touch scrolling */}
          <div className="h-4" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          @keyframes modalSlideUp {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  )
}
