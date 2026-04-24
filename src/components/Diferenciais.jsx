import React from 'react'

const items = [
  {
    number: '01',
    title: 'Qualidade Superior',
    desc: 'Vidros selecionados dos melhores fornecedores, com controle rigoroso de qualidade em cada etapa do processo.',
    highlight: 'ISO 9001',
  },
  {
    number: '02',
    title: 'Precisão Técnica',
    desc: 'Corte computadorizado com tolerância milimétrica. Cada peça é fabricada para encaixar perfeitamente.',
    highlight: '±0.5mm',
  },
  {
    number: '03',
    title: 'Tecnologia Avançada',
    desc: 'Equipamentos de última geração para temperagem, laminação e processamento de vidros especiais.',
    highlight: 'High-tech',
  },
  {
    number: '04',
    title: 'Personalização Total',
    desc: 'Formatos, tamanhos, acabamentos e tratamentos desenvolvidos especialmente para cada projeto.',
    highlight: 'Sob medida',
  },
  {
    number: '05',
    title: 'Durabilidade Comprovada',
    desc: 'Produtos com alta resistência a intempéries, impactos e variações térmicas, com garantia extendida.',
    highlight: '10 anos',
  },
  {
    number: '06',
    title: 'Instalação Especializada',
    desc: 'Equipe técnica certificada que garante a instalação perfeita e segura em qualquer projeto.',
    highlight: 'Garantido',
  },
]

export default function Diferenciais() {
  return (
    <section
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #010f40 0%, #012488 100%)',
      }}
    >
      {/* Decorative diamond shape */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(1,100,200,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-glass-300 text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            Por que escolher a Linde
          </p>
          <h2 className="font-display text-5xl font-bold text-white mb-5">
            Nossos Diferenciais
          </h2>
          <div className="w-16 h-0.5 bg-glass-400 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-6 font-display font-bold text-7xl pointer-events-none"
                style={{ color: 'rgba(117,194,255,0.07)' }}
              >
                {item.number}
              </div>

              {/* Highlight badge */}
              <div
                className="inline-flex mb-5 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                style={{
                  background: 'rgba(117,194,255,0.15)',
                  border: '1px solid rgba(117,194,255,0.3)',
                  color: '#75c2ff',
                }}
              >
                {item.highlight}
              </div>

              <h3 className="text-white font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-white/55 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
