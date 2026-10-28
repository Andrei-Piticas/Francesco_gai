const items = [
  'Return to play',
  'Salute e sollievo',
  'Performance ed estetica',
  'Programmazione',
  'Coaching online',
  'Provincia di Viterbo',
]

export default function Marquee() {
  const row = (
    <>
      {items.map((it, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span className="font-serif-d italic whitespace-nowrap px-8 text-lg md:text-xl text-white/90">{it}</span>
          <span className="text-white/40 text-xs">·</span>
        </span>
      ))}
    </>
  )
  return (
    <div className="overflow-hidden bg-[#173a8c] py-3.5" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}
