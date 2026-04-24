import React from 'react'
import Logo from './Logo'

function QRCode() {
  // Decorative QR placeholder
  const cells = []
  const size = 11
  // Seeded pattern for deterministic QR look penis
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0],
    [0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0],
    [1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0],
    [1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0],
    [1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0],
    [1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0],
  ]

  return (
    <div
      className="relative inline-block rounded-2xl p-3"
      style={{
        background: 'white',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${pattern[0].length}, 1fr)`,
          gap: 2,
          width: 160,
          height: 160,
        }}
      >
        {pattern.map((row, ri) =>
          row.map((cell, ci) => (
            <div
              key={`${ri}-${ci}`}
              style={{
                borderRadius: 1,
                background: cell ? '#012488' : 'transparent',
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default function CTASection() {
  return (
    <section
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, #012488 0%, #011c6b 40%, #010827 100%)',
      }}
    >
      {/* Ambient lights */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(46,164,255,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(1,84,166,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(117,194,255,0.15)', border: '1px solid rgba(117,194,255,0.3)', color: '#75c2ff' }}
            >
              <div className="w-2 h-2 rounded-full bg-glass-400 animate-pulse" />
              Fale com a Linde Vidros
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Transforme seu{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #75c2ff 0%, #2ea4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                projeto
              </span>
              {' '}em realidade
            </h2>

            <p className="text-white/55 text-xl leading-relaxed mb-10 max-w-xl">
              Nossa equipe de especialistas está pronta para desenvolver a solução em vidro ideal para o seu projeto, com qualidade e precisão que você pode confiar.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {[
                { icon: '📍', label: 'Localização', value: 'Visite nosso showroom' },
                { icon: '💬', label: 'WhatsApp', value: 'Acesse pelo QR Code ao lado' },
                { icon: '🌐', label: 'Website', value: 'lindevidros.com.br' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium tracking-wider uppercase">{c.label}</p>
                    <p className="text-white/85 text-base font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: QR + brand */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <p className="text-white/50 text-sm font-medium tracking-wider uppercase">
                Escaneie e entre em contato
              </p>
              <QRCode />
              <p className="text-glass-300 text-base font-medium">
                Conheça mais soluções
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-white/15" />

            {/* Large logo */}
            <Logo size="lg" />
            <p className="text-white/30 text-xs font-medium tracking-[0.25em] uppercase text-center">
              Soluções em vidro de alto padrão
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
