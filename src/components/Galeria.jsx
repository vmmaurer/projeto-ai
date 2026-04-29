import React, { useState } from 'react'
import { galleryImages } from '../data/products'

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #040b19 0%, #405b7a 50%, #040b19 100%)',
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-glass-300 text-xs font-semibold tracking-[0.4em] uppercase mb-3">
          
          </p>
          <h2 className="font-display text-5xl font-bold text-white mb-5">
            Galeria
          </h2>
          <div className="w-16 h-0.5 bg-glass-400 mx-auto mb-5" />
          <p className="text-white/50 text-lg">
            Projetos que inspiram arquitetura e design com vidro
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-7 grid-rows-2 gap-4 auto-rows-[160px]">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer active:scale-95 transition-transform duration-200 ${img.span}`}
              onPointerDown={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: 'scale(1)', willChange: 'transform' }}
                draggable={false}
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(1,15,64,0.8), transparent)' }}
              >
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
              {/* Always-visible subtle overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(1,15,64,0.3) 0%, transparent 60%)' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{ background: 'rgba(1,9,39,0.92)', backdropFilter: 'blur(24px)', animation: 'fadeIn 0.3s ease' }}
          onPointerDown={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 touch-target w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            onPointerDown={() => setLightbox(null)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            style={{ animation: 'modalScale 0.4s cubic-bezier(0.22,1,0.36,1)' }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src.replace('w=600', 'w=1200')}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: 'linear-gradient(to top, rgba(1,15,64,0.9), transparent)' }}
            >
              <p className="text-white text-lg font-medium">{lightbox.alt}</p>
              <p className="text-white/50 text-sm">Linde Vidros</p>
            </div>
          </div>
          <style>{`
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
            @keyframes modalScale {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </section>
  )
}
