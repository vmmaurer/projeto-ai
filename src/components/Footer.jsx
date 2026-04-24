import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6 md:px-12"
      style={{
        background: 'linear-gradient(180deg, #010827 0%, #010515 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Logo size="md" />
          <p className="text-white/30 text-sm max-w-xs text-center md:text-left">
            Qualidade, precisão e elegância em cada projeto de vidro.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © 2024 Linde Vidros — Todos os direitos reservados
          </p>
          <p className="text-white/15 text-xs">
            Apresentação para feira · Versão digital exclusiva
          </p>
        </div>
      </div>
    </footer>
  )
}
