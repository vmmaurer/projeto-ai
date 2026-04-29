import React, { useState, useEffect } from 'react'

const NAV_HEIGHT = 120

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Transformações', href: '#antes-depois' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          height: `${NAV_HEIGHT}px`,
          background: 'rgba(4,11,25,0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.03)',
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 h-full"
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 80px',
            alignItems: 'center',
          }}
        >
          {/* Esquerda — Hamburguer */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="flex flex-col justify-center gap-[5px] p-2 rounded-lg transition-all duration-200"
              style={{ background: menuOpen ? 'rgba(255,255,255,0.07)' : 'transparent' }}
            >
              <span
                className="block w-6 h-[2px] rounded transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-[2px] rounded transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-[2px] rounded transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>

          {/* Centro — Logo */}
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/images/logonavbar.png"
              alt="Linde Vidros 60 anos"
              style={{
                height: `${NAV_HEIGHT - -18}px`,
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          {/* Direita — vazio */}
          <div />
        </div>
      </nav>

      {/* ── MENU DROPDOWN ── */}
      <div
        style={{
          position: 'fixed',
          top: `${NAV_HEIGHT}px`,
          left: '32px', 
          right: 'auto',
          width: '200px',
          borderRadius:'20px',
          zIndex: 49,                // ← z-index direto no style, não classe Tailwind
          background: 'rgba(4,11,25,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-120%)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s ease',
        }}
      >
        {navItems.map((item, i) => (
          <React.Fragment key={item.href}>
            <button
              className="text-left px-6 py-3 text-sm font-medium tracking-wider transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.75)', background: 'transparent' }}
              onClick={() => scrollTo(item.href)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#75c2ff'
                e.currentTarget.style.background = 'rgba(117,194,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {item.label}
            </button>
            {i < navItems.length - 1 && (
              <div style={{ 
      height: '1px',
      width: '70%',
      margin: '0 auto',
      background: 'rgba(255,255,255,0.05)' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Overlay — fecha ao clicar fora */}
      {menuOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 48 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── WHATSAPP FAB ── */}
      
        <a href="https://wa.me/554736414444?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20por%20meio%20do%20site%20e%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20oferecidas%20pela%20Linde%20Vidros."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 group"
      >
        <div
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-105"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" width={26} height={26}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        <span className="text-[10px] tracking-widest text-white/75 font-semibold uppercase">
          Fale Conosco
        </span>
      </a>
    </>
  )
}


/* import React, { useState, useEffect } from 'react'
import Logo from './Logo'

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Transformações', href: '#antes-depois' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-400"
      style={{
        background: scrolled
          ? 'rgba(1,15,64,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        <div onPointerDown={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo size="sm" />
        </div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 touch-target"
              style={{
                color: active === item.href ? '#75c2ff' : 'rgba(255,255,255,0.6)',
                background: active === item.href ? 'rgba(117,194,255,0.1)' : 'transparent',
                touchAction: 'manipulation',
              }}
              onPointerDown={() => {
                setActive(item.href)
                scrollTo(item.href)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
} */ 
