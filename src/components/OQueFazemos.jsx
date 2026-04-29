import React from 'react'

const solutions = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="#75c2ff" strokeWidth="2"/>
        <path d="M4 12H28M4 20H28M12 4V28M20 4V28" stroke="#75c2ff" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
    title: 'Vidros Arquitetônicos',
    desc: 'Soluções para fachadas, coberturas e divisórias de alto padrão.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 28H4L16 4Z" stroke="#75c2ff" strokeWidth="2" fill="none"/>
        <path d="M16 14V20M16 23V24" stroke="#75c2ff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Segurança e Resistência',
    desc: 'Vidros temperados e laminados com certificação de segurança ABNT.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#75c2ff" strokeWidth="2"/>
        <path d="M10 16C10 16 12 12 16 12C20 12 22 16 22 16C22 16 20 20 16 20C12 20 10 16 10 16Z" stroke="#75c2ff" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="3" fill="#75c2ff" opacity="0.7"/>
      </svg>
    ),
    title: 'Controle Solar',
    desc: 'Filtros UV e tratamentos que protegem sem bloquear a luminosidade natural.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="10" width="20" height="14" rx="2" stroke="#75c2ff" strokeWidth="2"/>
        <path d="M6 14H26M12 10V8C12 6.9 12.9 6 14 6H18C19.1 6 20 6.9 20 8V10" stroke="#75c2ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Vidros para Interiores',
    desc: 'Boxes, espelhos, divisórias e prateleiras para ambientes residenciais e comerciais.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28V8L16 4L24 8V28H8Z" stroke="#75c2ff" strokeWidth="2" fill="none"/>
        <path d="M13 28V18H19V28" stroke="#75c2ff" strokeWidth="1.5"/>
        <rect x="12" y="10" width="4" height="4" stroke="#75c2ff" strokeWidth="1.5"/>
        <rect x="18" y="10" width="4" height="4" stroke="#75c2ff" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
    title: 'Aplicações Comerciais',
    desc: 'Projetos completos para varejistas, hotéis, escritórios e edifícios corporativos.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" stroke="#75c2ff" strokeWidth="2"/>
        <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M24.5 7.5L21.7 10.3M10.3 21.7L7.5 24.5" stroke="#75c2ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Eficiência Energética',
    desc: 'Vidros insulados de alto desempenho para redução do consumo de energia.',
  },
]

export default function OQueFazemos() {
  return (
    <section
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #040b19 0%, #405b7a 50%, #040b19 100%)',
      }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(46,164,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-glass-300 text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            Nossa especialidade
          </p>
          <h2 className="font-display text-5xl font-bold text-white mb-5">
            O que fazemos
          </h2>
          <div className="w-16 h-0.5 bg-glass-400 mx-auto mb-6" />
          <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed">
            Da concepção à instalação, entregamos soluções em vidro que elevam a qualidade e a estética de qualquer projeto arquitetônico.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 transition-all duration-300 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                touchAction: 'manipulation',
              }}
            >
              <div className="mb-5 opacity-90">{s.icon}</div>
              <h3 className="text-white font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-white/55 text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
