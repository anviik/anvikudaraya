import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'
import { container, item } from '../lib/anim.js'
import SKILLS from '../data/skills.js'

export default function About() {
  return (
    <Section id="about" title="About me">
      <motion.div
        className="grid items-start gap-8 sm:grid-cols-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* <motion.div className="sm:col-span-2" variants={item}>
          <div className="aspect-square w-full rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur">
            <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </motion.div> */}

        <motion.div className="sm:col-span-3" variants={item}>
          <p className="text-pretty text-base leading-relaxed text-white/80">
            I am a Computer Science and Engineering student who enjoys building polished interfaces and reliable systems.
            I work with React, Python, and modern tooling. I lead student projects, contribute to research, and keep things simple.
          </p>

          {/* Tech logo grid */}
          <motion.ul className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-6" variants={container}>
            {SKILLS.map((s) => (
              <motion.li key={s.name} variants={item} className="group flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/80 p-2 shadow-sm transition hover:ring-1 hover:ring-white/20">
                  <motion.img
                    src={s.src}
                    alt={s.name}
                    className="h-10 w-10 md:h-12 md:w-12 object-contain [mix-blend-mode:normal] bg-transparent"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  />
                </div>
                <span className="text-xs text-white/70">{s.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </Section>
  )
}
