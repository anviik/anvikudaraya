export default function Navbar() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <nav className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-wide">AK</a>
          <ul className="hidden gap-6 sm:flex">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/70 transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-xl border border-white/10 px-3 py-1.5 text-sm font-medium transition hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  )
}
