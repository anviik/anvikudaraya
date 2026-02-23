import { useState } from 'react'

export default function Navbar() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
      <nav className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <a href="#home" className="group flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-sm font-semibold tracking-wide text-white/90 transition group-hover:border-white/30">
                AK
              </span>
              <span className="hidden text-sm font-semibold tracking-wide text-white/80 sm:block">Anvi Kudaraya</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 transition hover:border-white/30 sm:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-5 bg-white/80" />
                <span className="block h-0.5 w-5 bg-white/80" />
                <span className="block h-0.5 w-5 bg-white/80" />
              </span>
            </button>
            <ul className="hidden items-center gap-4 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs text-white/70 transition hover:text-white sm:text-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="public/AnviKudarayaNov2025.pdf"
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/80 transition hover:border-white/30 hover:text-white sm:px-4 sm:text-sm"
              >
                Resume
              </a>
            </li>
            </ul>
          </div>
          {open ? (
            <ul className="flex flex-wrap items-center gap-3 sm:hidden">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-xs text-white/70 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="public/AnviKudarayaNov2025.pdf"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  Resume
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    </header>
  )
}
