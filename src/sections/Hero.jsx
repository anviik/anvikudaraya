import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocument } from 'react-icons/hi'

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-6 px-5 pb-16 pt-16 sm:px-8 sm:pt-20 md:pt-24 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex min-h-[70vh] flex-col items-center justify-center text-center"
      >
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="text-[15px] uppercase tracking-[0.45em] text-white/50">University of California, Merced</div>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-white/70">
              Computer Science &amp; Engineering
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-white/30 sm:inline-block" aria-hidden="true" />
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-white/70">
              Cognitive Science
            </span>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi my name is <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Anvi Kudaraya</span>
        </h1>
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">Full-stack • AI/ML • Product</p>
        <p className="mb-10 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
          Interested in full-stack engineering, AI/ML, and product management, especially in practical ML systems, product strategy, and clean execution. I also want to build HCI-driven products that feel human and useful.
        </p>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex gap-3">
            <a href="#experience" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90">View experience</a>
            <a href="#contact" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/30 hover:bg-white/5">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/anviik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/anvi-kudaraya-ba116320b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="public/AnviKudarayaNov2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <HiDocument className="w-8 h-8" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
