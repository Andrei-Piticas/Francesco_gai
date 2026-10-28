import { useReveal } from '../hooks/useReveal'

export default function Contatti() {
  const ref = useReveal<HTMLElement>()

  return (
    <footer id="contatti" ref={ref} className="bg-[#173a8c] text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <h2 className="reveal font-serif-d text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.0] tracking-[-0.02em] max-w-4xl" style={{ ['--reveal-delay' as string]: '0.08s' }}>
          Fai del movimento{' '}
          <em className="text-[#c4d2f5]">la tua medicina.</em>
        </h2>

        {/* Reassurance — P0 trust signal */}
        <p className="reveal mt-6 max-w-lg text-white/90 text-lg leading-relaxed" style={{ ['--reveal-delay' as string]: '0.14s' }}>
          Ogni percorso inizia con una chiamata conoscitiva gratuita. Scrivi o chiama — rispondo entro 24 ore.
        </p>

        <div className="reveal mt-9 flex flex-wrap gap-4" style={{ ['--reveal-delay' as string]: '0.22s' }}>
          <a
            href="mailto:francesco.gai99@gmail.com?subject=Prenotazione%20seduta"
            className="inline-block bg-white text-[#173a8c] rounded-full font-medium text-[0.92rem] px-8 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173a8c]"
          >
            Prenota una seduta
          </a>
          <a
            href="tel:+393891250637"
            className="inline-block border border-white/60 rounded-full font-medium text-[0.92rem] px-8 py-3.5 transition-all duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173a8c]"
          >
            Chiama: 389 125 0637
          </a>
        </div>

        <div className="mt-14 md:mt-16 grid sm:grid-cols-3 gap-8 border-t border-white/20 pt-8">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70 mb-2">Email</p>
            <a href="mailto:francesco.gai99@gmail.com" className="link-underline text-lg font-medium break-all">
              francesco.gai99@gmail.com
            </a>
          </div>
          <div className="reveal" style={{ ['--reveal-delay' as string]: '0.1s' }}>
            <p className="text-xs uppercase tracking-[0.18em] text-white/70 mb-2">Telefono</p>
            <a href="tel:+393891250637" className="link-underline text-lg font-medium">
              389 125 0637
            </a>
          </div>
          <div className="reveal" style={{ ['--reveal-delay' as string]: '0.2s' }}>
            <p className="text-xs uppercase tracking-[0.18em] text-white/70 mb-2">Dove</p>
            <p className="text-lg font-medium">Provincia di Viterbo</p>
            <p className="text-sm text-white/75 mt-1">+ coaching online in tutta Italia</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/60 tracking-wide">
          <span>© {new Date().getFullYear()} Francesco Gai — Chinesiologo &amp; Personal Trainer</span>
          <span>Attività motoria preventiva e adattata</span>
        </div>
      </div>
    </footer>
  )
}
