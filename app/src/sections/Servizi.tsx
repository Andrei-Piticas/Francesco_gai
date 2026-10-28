import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

type Servizio = {
  num: string
  titolo: string
  tag: string
  descrizione: string
  pacchetti: string[]
}

const servizi: Servizio[] = [
  {
    num: '01',
    titolo: 'Return to play',
    tag: 'Atleti post-infortunio',
    descrizione:
      "Specifico per l'atleta professionista che ha finito la fisioterapia e deve riatletizzarsi per tornare in campo o in strada in totale sicurezza.",
    pacchetti: ['1 seduta', '5 sedute', '12 sedute'],
  },
  {
    num: '02',
    titolo: 'Salute e sollievo',
    tag: 'Dolori cronici · Anziani',
    descrizione:
      'Ideale per soggetti con dolori cronici, anziani, o per chi deve fare del movimento la propria medicina.',
    pacchetti: ['1 seduta', '5 sedute', '12 sedute', '18 sedute'],
  },
  {
    num: '03',
    titolo: 'Performance ed estetica',
    tag: 'Atleti · Amatoriali · Ricomposizione corporea',
    descrizione:
      "Ideale per atleti, sportivi amatoriali o per chiunque voglia ottimizzare il proprio corpo, migliorandone la performance e l'armonia.",
    pacchetti: ['1 seduta', '5 sedute', '12 sedute', '18 sedute'],
  },
]

export default function Servizi() {
  const ref = useReveal<HTMLElement>()
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="servizi" ref={ref} className="max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24">

      {/* section statement — two-line Bending Spoons register */}
      <div className="mb-14 md:mb-20">
        <h2
          className="reveal font-serif-d text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.0] tracking-[-0.02em]"
          style={{ ['--reveal-delay' as string]: '0s' }}
        >
          Tre percorsi,
          <br />
          <em className="text-[#173a8c]">un metodo.</em>
        </h2>
      </div>

      {/* accordion — service name becomes display headline when open */}
      <div className="border-t border-[#101d42]/12">
        {servizi.map((s, i) => {
          const isOpen = open === i
          return (
            <div
              key={s.num}
              className="reveal border-b border-[#101d42]/12"
              style={{ ['--reveal-delay' as string]: `${i * 0.06}s` }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="acc-head w-full py-7 md:py-8 text-left group"
                aria-expanded={isOpen}
                aria-controls={`servizio-body-${i}`}
              >
                <div className="flex items-baseline justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    {/* service name — display scale, grows when open */}
                    <span
                      className={`font-serif-d block leading-tight transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? 'text-4xl md:text-6xl lg:text-7xl text-[#101d42]'
                          : 'text-2xl md:text-4xl text-[#101d42]/80'
                      }`}
                    >
                      {s.titolo}
                    </span>
                    <span
                      className={`text-sm text-[#101d42]/45 mt-1.5 block transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-70'}`}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <span
                    className={`acc-icon ${isOpen ? 'open' : ''} text-2xl text-[#173a8c] shrink-0 font-light`}
                  >
                    +
                  </span>
                </div>
              </button>

              <div className={`acc-body ${isOpen ? 'open' : ''}`} id={`servizio-body-${i}`}>
                <div className="acc-inner">
                  <div className="pb-10 md:pb-14 grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16">

                    {/* description — single clear statement */}
                    <p className="text-lg md:text-xl leading-relaxed text-[#101d42]/75 max-w-xl">
                      {s.descrizione}
                    </p>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#101d42]/40 mb-4">
                        Pacchetti disponibili
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.pacchetti.map((p) => (
                          <span
                            key={p}
                            className="text-sm font-medium border border-[#173a8c]/30 text-[#173a8c] rounded-full px-4 py-1.5"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`mailto:francesco.gai99@gmail.com?subject=${encodeURIComponent('Info percorso ' + s.titolo)}`}
                        className="link-underline inline-block mt-6 text-sm font-semibold text-[#173a8c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c] focus-visible:rounded-sm"
                      >
                        Richiedi disponibilità →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p
        className="reveal mt-8 text-sm text-[#101d42]/45"
        style={{ ['--reveal-delay' as string]: '0.2s' }}
      >
        Possibilità di <span className="text-[#173a8c] font-medium">sconto</span> per le sedute di allenamento in coppia.
      </p>
    </section>
  )
}
