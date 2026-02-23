import Section from '../components/Section.jsx'
import { motion } from 'framer-motion'
import { container, item } from '../lib/anim.js'
import { useRef } from 'react'
import PROJECTS from '../data/projects.js'

function ProjectCard({ title, desc, tags, link, image, imageClass }) {
  return (
    <motion.a
      variants={item}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative block min-w-[85%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] xl:min-w-[31%]"
      whileHover={{ scale: 1.01 }}
    >
      <img
        src={image}
        alt={title}
        className={`mb-4 h-28 w-full rounded-xl bg-white/[0.04] ${imageClass || 'object-cover'}`}
      />
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-white/70">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="rounded-lg border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
        ))}
      </div>
      <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} />
    </motion.a>
  )
}

export default function Projects() {
  const scrollerRef = useRef(null)
  const scrollPage = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const delta = Math.round(el.clientWidth * 0.35) * dir
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <Section id="projects" title="Projects/Research">
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
      <div className="relative">
        <button aria-label="Scroll left" onClick={() => scrollPage(-1)} className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur transition hover:bg-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button aria-label="Scroll right" onClick={() => scrollPage(1)} className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur transition hover:bg-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <motion.div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-p-6 px-1 py-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROJECTS.map((p, i) => (<ProjectCard key={i} {...p} />))}
        </motion.div>
      </div>
    </Section>
  )
}
