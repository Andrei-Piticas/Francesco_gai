import { useReveal } from '../hooks/useReveal'

const principi = [
  'Rispetto dei tempi biologici',
  'Adattamenti stabili, non temporanei',
  'Progressioni specifiche',
  'Sicurezza e monitoraggio nel tempo',
]

export default function Programmazione() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="programmazione" ref={ref} className="bg-[#0f2763] text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <h2 className="reveal font-serif-d text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.0] tracking-[-0.02em] max-w-4xl" style={{ ['--reveal-delay' as string]: '0.08s' }}>
          Non vendo schede.{' '}
          <br className="hidden md:block" />
          <em className="text-[#9db4ea]">Costruisco programmi.</em>
        </h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-[1.25fr_1fr] gap-12 md:gap-16">
          <div>
            <p className="reveal text-xl leading-relaxed text-white/90">
              Se cerchi un programma standard, uguale per tutti e concentrato in poche
              settimane, <em className="font-serif-d text-[#9db4ea]">non sono il professionista adatto a te.</em>
            </p>
            <p className="reveal mt-5 text-white/80 leading-relaxed" style={{ ['--reveal-delay' as string]: '0.1s' }}>
              Solo percorsi di miglioramento mirati, che favoriscono:
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-x-8">
              {principi.map((p, i) => (
                <li
                  key={p}
                  className="reveal py-3.5 border-b border-white/15 text-white/85"
                  style={{ ['--reveal-delay' as string]: `${0.14 + i * 0.05}s` }}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="reveal text-xs uppercase tracking-[0.18em] text-white/70 mb-4" style={{ ['--reveal-delay' as string]: '0.1s' }}>
              Pacchetti disponibili
            </p>
            {[{ t: 'Macrociclo', d: '3 mesi' }, { t: 'Macrociclo', d: '6 mesi' }].map((p, i) => (
              <a
                key={p.d}
                href={`mailto:francesco.gai99@gmail.com?subject=${encodeURIComponent('Info macrociclo ' + p.d)}`}
                className="reveal group flex items-baseline justify-between border border-white/25 rounded-xl px-6 py-5 mb-4 transition-all duration-300 hover:bg-white hover:text-[#0f2763] hover:border-white"
                style={{ ['--reveal-delay' as string]: `${0.15 + i * 0.07}s`, transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] opacity-60">{p.t}</span>
                  <span className="font-serif-d text-3xl mt-1 block">{p.d}</span>
                </span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            ))}
            <p className="reveal text-white/75 text-sm mt-2" style={{ ['--reveal-delay' as string]: '0.3s' }}>
              Disponibile anche con <span className="text-white font-medium">coaching online</span>, ovunque tu sia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
