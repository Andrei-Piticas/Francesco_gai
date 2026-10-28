import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#perche', label: 'Perché un PT' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#programmazione', label: 'Programmazione' },
  { href: '#chi-sono', label: 'Chi sono' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape, trap focus in drawer
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    // prevent body scroll when drawer open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-[#FEFEFE] border-b border-[#101d42]/10 transition-all duration-500 ${
          scrolled ? 'shadow-[0_10px_30px_-12px_rgba(16,29,66,0.25)]' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-3.5">
          <a
            href="#top"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c] focus-visible:rounded-sm"
            aria-label="Francesco Gai — homepage"
          >
            <img src="img/logo.svg" alt="Francesco Gai" className="h-14 md:h-16 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`link-underline text-[0.85rem] font-medium transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c] focus-visible:rounded-sm text-[#101d42]/70 hover:text-[#101d42]`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:francesco.gai99@gmail.com?subject=Richiesta%20informazioni"
              className="btn-primary !py-2.5 !px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c] focus-visible:ring-offset-2"
            >
              Contattami
            </a>

            {/* Mobile hamburger */}
            <button
              ref={triggerRef}
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg gap-1.5 transition-colors hover:bg-[#101d42]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c]"
              aria-label="Apri menu di navigazione"
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
            >
              <span className="w-5 h-px bg-[#101d42] transition-colors duration-500" />
              <span className="w-5 h-px bg-[#101d42] transition-colors duration-500" />
              <span className="w-3 h-px bg-[#101d42] transition-colors duration-500 self-start ml-1" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          onClick={close}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#101d42]/60 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile drawer panel */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        className={`fixed top-0 right-0 bottom-0 z-[70] w-72 max-w-[85vw] bg-[#FEFEFE] flex flex-col md:hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#101d42]/10">
          <img src="img/logo.svg" alt="Francesco Gai" className="h-12 w-auto" />
          <button
            onClick={close}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[#101d42]/60 hover:text-[#101d42] hover:bg-[#101d42]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c]"
            aria-label="Chiudi menu"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav aria-label="Navigazione mobile" className="flex-1 px-6 py-8">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="flex items-center py-3.5 text-[1.05rem] font-medium text-[#101d42]/75 hover:text-[#173a8c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c] focus-visible:rounded-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 pb-8 flex flex-col gap-3 border-t border-[#101d42]/10 pt-6">
          <a
            href="mailto:francesco.gai99@gmail.com?subject=Richiesta%20informazioni"
            onClick={close}
            className="btn-primary text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c] focus-visible:ring-offset-2"
          >
            Contattami per email
          </a>
          <a
            href="https://wa.me/393891250637?text=Ciao%20Francesco%2C%20vorrei%20informazioni%20sui%20tuoi%20percorsi%20di%20allenamento."
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-center justify-center gap-2 border border-[#101d42]/20 rounded-full font-medium text-[0.92rem] px-8 py-3 text-[#101d42] hover:bg-[#101d42]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173a8c] focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
