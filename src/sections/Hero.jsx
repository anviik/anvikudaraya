import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocument } from 'react-icons/hi'

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 pb-10 pt-64 sm:px-8 sm:pt-32 md:pt-40 lg:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center min-h-[60vh]"
      >
        <h1 className="mb-8 text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I am <span className="bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent">Anvi</span>
        </h1>
        <p className="max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg mb-10">
          Website still under construction. Please check back soon for updates!
        </p>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex gap-3">
            <a href="#projects" className="rounded-xl bg-white px-4 py-2 text-sm text-black transition hover:opacity-90">View projects</a>
            <a href="#contact" className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5">Contact</a>
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
              href="/path-to-your-resume.pdf"
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