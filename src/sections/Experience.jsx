import Section from '../components/Section.jsx'
import { motion } from 'framer-motion'
import { container } from '../lib/anim.js'
import EXPERIENCE from '../data/experience.js'

function TimelineItem({ title, org, date, points, logo }) {
  return (
    <li className="relative pl-20">
      <motion.div
        className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      >
        <img src={logo} alt="logo" className="h-full w-full rounded-full object-contain" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-xs text-white/60">{date}</span>
        </div>
        <p className="mt-1 text-sm text-white/70">{org}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-white/80">
          {points.map((p, i) => (<li key={i} className="leading-relaxed">• {p}</li>))}
        </ul>
      </motion.div>
    </li>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative mx-auto mt-6 max-w-3xl">
        <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <ul className="space-y-8">
          {EXPERIENCE.map((e, idx) => (<TimelineItem key={idx} {...e} />))}
        </ul>
      </div>
    </Section>
  )
}
