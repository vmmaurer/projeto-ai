import React, { useState, useRef, useCallback } from 'react'
import { beforeAfterExamples } from '../data/products'

function ComparisonSlider({ before, after, label }) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handlePointerDown = (e) => {
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => setIsDragging(false)

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden cursor-ew-resize"
      style={{ height: '400px', touchAction: 'none', userSelect: 'none' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Before image (full) */}
      <img
        src={before}
        alt="Antes"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={after}
          alt="Depois"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute inset-0 w-0.5 bg-white/70" />
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(1,36,136,0.9)',
            border: '2px solid rgba(255,255,255,0.6)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 5L2 10L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 5L18 10L14 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white/80"
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
      >
        Antes
      </div>
      <div
        className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
        style={{ background: 'rgba(46,164,255,0.6)', backdropFilter: 'blur(8px)' }}
      >
        Depois
      </div>
    </div>
  )
}

export default function AntesDepois() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = beforeAfterExamples[activeIdx]

  return (
    <section
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #011c6b 0%, #010f40 100%)',
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 800,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(46,164,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-glass-300 text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            Transformações reais
          </p>
          <h2 className="font-display text-5xl font-bold text-white mb-5">
            Antes e Depois
          </h2>
          <div className="w-16 h-0.5 bg-glass-400 mx-auto mb-6" />
          <p className="text-white/50 text-lg">
            Arraste o divisor para visualizar a transformação
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {beforeAfterExamples.map((ex, i) => (
            <button
              key={ex.id}
              className="px-6 py-3 rounded-xl text-base font-medium transition-all duration-250 active:scale-95 touch-target"
              style={{
                background: i === activeIdx
                  ? 'rgba(46,164,255,0.25)'
                  : 'rgba(255,255,255,0.05)',
                border: i === activeIdx
                  ? '1px solid rgba(46,164,255,0.5)'
                  : '1px solid rgba(255,255,255,0.1)',
                color: i === activeIdx ? '#b6dcff' : 'rgba(255,255,255,0.5)',
                touchAction: 'manipulation',
              }}
              onPointerDown={() => setActiveIdx(i)}
            >
              {ex.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <ComparisonSlider
          key={active.id}
          before={active.before}
          after={active.after}
          label={active.label}
        />

        <p className="text-center text-white/30 text-sm mt-4">
          {active.label} — Solução Linde Vidros
        </p>
      </div>
    </section>
  )
}
