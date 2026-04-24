import React, { useState, useEffect } from 'react'
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
}
