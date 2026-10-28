import { useReveal } from '../hooks/useReveal'

const rischi = [
  'Esecuzioni errate degli esercizi',
  'Allenamenti poco efficaci',
  'Demotivazione',
  'Assenza di risultati',
  'Infortuni',
]

const fattori = ['Età', 'Efficienza fisica', 'Obiettivi', 'Composizione corporea', 'Postura']

export default function Perche() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="perche" ref={ref} className="bg-[#eef1f9]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-20 md:pb-28">

        {/* headline — full width, no constraining max-w */}
        <h2
          className="reveal font-serif-d text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.0] tracking-[-0.02em]"
          style={{ ['--reveal-delay' as string]: '0s' }}
        >
          Allenarsi senza guida
          <br />
          <em className="text-[#173a8c]">non funziona.</em>
        </h2>

        <div className="mt-16 md:mt-24 grid md:grid-cols-[1fr_1fr] gap-0 md:gap-24">

          {/* left: rischi list — numerals as the dominant visual */}
          <div className="border-t border-[#101d42]/15">
            {rischi.map((r, i) => (
              <div
                key={r}
                className="reveal flex items-start gap-6 md:gap-8 py-7 border-b border-[#101d42]/10"
                style={{ ['--reveal-delay' as string]: `${0.06 + i * 0.05}s` }}
              >
                {/* large ordinal — the design's skeleton */}
                <span
                  className="font-serif-d text-[3.5rem] md:text-[4.5rem] leading-none text-[#173a8c]/20 shrink-0 w-16 md:w-20 select-none"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-xl md:text-2xl font-serif-d leading-snug pt-2 text-[#101d42]">{r}</span>
              </div>
            ))}
          </div>

          {/* right: the answer — stripped to its spine */}
          <div className="mt-14 md:mt-0 flex flex-col justify-between">
            <div>
              <p
                className="reveal font-serif-d text-2xl md:text-3xl leading-[1.3] text-[#101d42]"
                style={{ ['--reveal-delay' as string]: '0.1s' }}
              >
                Un <em className="text-[#173a8c]">chinesiologo</em> costruisce
                il programma sulla singola persona —<br className="hidden md:block" />
                non sull'obiettivo generico.
              </p>

              <ul
                className="reveal mt-8 flex flex-wrap gap-2"
                style={{ ['--reveal-delay' as string]: '0.18s' }}
              >
                {fattori.map((f) => (
                  <li
                    key={f}
                    className="text-sm font-medium bg-white border border-[#101d42]/10 rounded-full px-4 py-2 text-[#101d42]/80"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* stripped to the one sharpest sentence */}
            <p
              className="reveal mt-12 md:mt-0 text-[#101d42]/50 text-sm leading-relaxed"
              style={{ ['--reveal-delay' as string]: '0.28s' }}
            >
              Scienza applicata alla persona. Non improvvisazione.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
