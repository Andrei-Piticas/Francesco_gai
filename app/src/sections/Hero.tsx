import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className={`relative min-h-[100svh] flex items-end overflow-hidden ${loaded ? 'is-inview' : ''}`}>
      {/* foto di sfondo a tutto schermo */}
      <div className="img-frame hero-bg absolute inset-0 is-inview">
        <img
          src="img/laurea.jpg"
          alt="Francesco Gai il giorno della laurea magistrale"
          className="object-[62%_18%] md:object-[50%_16%]"
        />
      </div>

      {/* velo blu-notte per la leggibilità: scuro a sinistra e in basso, la foto resta visibile */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(8,19,48,0.90) 0%, rgba(8,19,48,0.62) 42%, rgba(8,19,48,0.18) 68%, rgba(8,19,48,0) 85%), linear-gradient(to top, rgba(8,19,48,0.55) 0%, rgba(8,19,48,0) 40%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(8,19,48,0.95) 0%, rgba(8,19,48,0.80) 38%, rgba(8,19,48,0.52) 62%, rgba(8,19,48,0.18) 82%)',
        }}
        aria-hidden="true"
      />

      {/* contenuto */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="reveal text-sm font-medium tracking-wide !text-[#b9c8ef] mb-6">
            <span className="md:hidden">Chinesiologo · Personal Trainer — Provincia di Viterbo</span>
            <span className="hidden md:inline">Chinesiologo · Personal Trainer — Provincia di Viterbo</span>
          </p>

          <h1 className="reveal font-serif-d text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-[-0.02em] text-white" style={{ ['--reveal-delay' as string]: '0.08s' }}>
            La scienza
            <br className="hidden sm:block" />
            dell'allenamento,
            <br />
            <em className="text-[#a9c0f5]">su misura</em> per te.
          </h1>

          <p className="reveal hidden md:block mt-6 md:mt-7 max-w-md text-lg text-white/80 leading-relaxed" style={{ ['--reveal-delay' as string]: '0.18s' }}>
            Niente schede usa e getta: percorsi di miglioramento mirati, costruiti sulla
            tua persona e monitorati nel tempo. In presenza a Viterbo e con coaching online.
          </p>

          {/* pulsanti desktop */}
          <div className="reveal hidden md:flex mt-9 flex-wrap items-center gap-4" style={{ ['--reveal-delay' as string]: '0.28s' }}>
            <a href="mailto:francesco.gai99@gmail.com?subject=Prenotazione%20seduta" className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1630]">
              Prenota una seduta
            </a>
            <a href="#servizi" className="link-underline text-sm font-medium text-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded-sm focus-visible:ring-offset-1">
              Scopri i percorsi
            </a>
          </div>

          {/* pulsante mobile */}
          <div className="reveal flex md:hidden mt-8 gap-3 flex-wrap" style={{ ['--reveal-delay' as string]: '0.28s' }}>
            <a href="#servizi" className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1630]">
              Scopri i percorsi
            </a>
            <a
              href="https://wa.me/393891250637?text=Ciao%20Francesco%2C%20vorrei%20informazioni%20sui%20tuoi%20percorsi%20di%20allenamento."
              className="inline-flex items-center gap-2 border border-white/50 rounded-full font-medium text-[0.92rem] px-5 py-3 text-white/90 transition-all duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* stats — visible on both mobile and desktop */}
          <div className="reveal flex mt-10 md:mt-12 gap-8 md:gap-10 border-t border-white/25 pt-6" style={{ ['--reveal-delay' as string]: '0.38s' }}>
            <div>
              <p className="font-serif-d text-2xl text-[#a9c0f5]">3</p>
              <p className="text-sm text-white/70">percorsi mirati</p>
            </div>
            <div>
              <p className="font-serif-d text-2xl text-[#a9c0f5]">1–18</p>
              <p className="text-sm text-white/70">sedute per pacchetto</p>
            </div>
            <div>
              <p className="font-serif-d text-2xl text-[#a9c0f5]">100%</p>
              <p className="text-sm text-white/70">personalizzato</p>
            </div>
          </div>
        </div>
      </div>

      {/* didascalia sulla foto */}
      <p
        className="reveal hidden md:block absolute bottom-4 left-4 md:left-8 z-10 text-xs text-white bg-black/40 backdrop-blur-sm rounded-full px-4 py-2"
        style={{ ['--reveal-delay' as string]: '0.5s' }}
      >
        Dottore Magistrale in Scienze Motorie — Tor Vergata, Roma
      </p>
    </section>
  )
}
