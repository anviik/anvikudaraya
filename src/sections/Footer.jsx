export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-white/70">© {new Date().getFullYear()} Anvi Kudaraya</p>
          <div className="flex items-center gap-3">
            <a href="#contact" target="_blank" rel="noreferrer" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
