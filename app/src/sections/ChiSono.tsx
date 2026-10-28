import { useReveal } from '../hooks/useReveal'

export default function ChiSono() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="chi-sono" ref={ref} className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <div className="md:col-span-5">
          <h2 className="reveal font-serif-d text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.02em]" style={{ ['--reveal-delay' as string]: '0.08s' }}>
            Scienza, <em className="text-[#173a8c]">non improvvisazione.</em>
          </h2>

          <p className="reveal mt-7 text-lg leading-relaxed text-[#101d42]/85" style={{ ['--reveal-delay' as string]: '0.16s' }}>
            La mia laurea magistrale mi qualifica come{' '}
            <span className="font-medium text-[#173a8c]">Chinesiologo specializzato in attività
            motoria preventiva e adattata.</span>
          </p>
          <p className="reveal mt-5 text-[#101d42]/70 leading-relaxed" style={{ ['--reveal-delay' as string]: '0.24s' }}>
            Cosa significa? Adatto la scienza dell'allenamento a chi ho di fronte: atleta in rientro
            da un infortunio, persona che convive con dolori cronici o sportivo in cerca del massimo —
            il percorso viene costruito su di te e monitorato nel tempo.
          </p>

          <div className="reveal mt-9 flex gap-10 border-t border-[#101d42]/10 pt-6" style={{ ['--reveal-delay' as string]: '0.32s' }}>
            <div>
              <p className="text-xs text-[#101d42]/55 mb-1">Zona</p>
              <p className="font-serif-d text-xl">Provincia di Viterbo</p>
            </div>
            <div>
              <p className="text-xs text-[#101d42]/55 mb-1">Coaching online</p>
              <p className="font-serif-d text-xl text-[#173a8c]">Disponibile</p>
            </div>
          </div>
        </div>

        {/* mobile: una foto piena per riga */}
        <div className="md:hidden flex flex-col gap-5 mt-2">
          <div className="reveal img-frame rounded-xl aspect-[4/3]" style={{ ['--reveal-delay' as string]: '0.1s' }}>
            <img src="img/palestra1.jpg" alt="Francesco Gai in sala pesi" />
          </div>
          <div className="reveal img-frame rounded-xl aspect-[4/3]" style={{ ['--reveal-delay' as string]: '0.18s' }}>
            <img src="img/palestra2.jpg" alt="Francesco Gai in allenamento" className="object-[50%_30%]" />
          </div>
          <div className="reveal img-frame rounded-xl aspect-[4/3]" style={{ ['--reveal-delay' as string]: '0.26s' }}>
            <img src="img/tesi.jpg" alt="Discussione della tesi di laurea magistrale" className="object-[50%_25%]" />
          </div>
        </div>

        {/* desktop: griglia sfalsata */}
        <div className="hidden md:grid md:col-span-7 grid-cols-12 gap-5">
          <div className="reveal col-span-7 img-frame rounded-xl aspect-[4/5]" style={{ ['--reveal-delay' as string]: '0.1s' }}>
            <img src="img/palestra1.jpg" alt="Francesco Gai in sala pesi" />
          </div>
          <div className="reveal col-span-5 img-frame rounded-xl aspect-[4/5] mt-14" style={{ ['--reveal-delay' as string]: '0.2s' }}>
            <img src="img/tesi.jpg" alt="Discussione della tesi di laurea magistrale" className="object-[50%_20%]" />
          </div>
          <div className="reveal col-span-9 col-start-3 img-frame rounded-xl aspect-[16/10] -mt-3" style={{ ['--reveal-delay' as string]: '0.15s' }}>
            <img src="img/palestra2.jpg" alt="Francesco Gai in allenamento" className="object-[50%_25%]" />
          </div>
        </div>
      </div>
    </section>
  )
}
