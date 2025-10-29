import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 pb-10 pt-36 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I am <span className="bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent">Anvi</span>
        </h1>
        <p className="max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
         Website still under construction. Please check back soon for updates!
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-xl bg-white px-4 py-2 text-sm text-black transition hover:opacity-90">View projects</a>
          <a href="#contact" className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5">Contact</a>
        </div>
      </motion.div>
    </section>
  )
}
