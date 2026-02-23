import Section from '../components/Section.jsx'
import { motion } from 'framer-motion'
import { container } from '../lib/anim.js'
import EXPERIENCE from '../data/experience.js'

function TimelineItem({ title, org, date, points, logo, link, skills = [], align = 'left' }) {
  const Wrapper = link ? 'a' : 'div'
  const wrapperProps = link ? { href: link, target: '_blank', rel: 'noreferrer' } : {}
  return (
    <li className="relative">
      <div className="grid gap-4 md:grid-cols-[1fr_80px_1fr] md:items-start hidden md:grid">
        {/* Left column (content when aligned left) */}
        <div className={align === 'left' ? 'md:pr-4' : 'md:pr-4 md:opacity-0 md:pointer-events-none'} aria-hidden={align !== 'left'}>
          {align === 'left' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/25 bg-white/[0.05] px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur"
            >
              <Wrapper {...wrapperProps} className={link ? 'block focus:outline-none' : undefined}>
                <div className="flex flex-row flex-wrap items-baseline gap-x-3 gap-y-1 md:flex-col md:gap-1.5">
                  <span className="text-[11px] uppercase tracking-wide text-white/50">{date}</span>
                  <p className="text-[13px] text-white/65">{org}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-white/95">{title}</h3>
                  <ul className="mt-1.5 space-y-1 text-[13px] text-white/75">
                    {points.map((p, i) => (
                      <li key={i} className="leading-relaxed">
                        • {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {skills.length > 0 ? (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/20 bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/75">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Wrapper>
            </motion.div>
          ) : null}
        </div>

        {/* Center column (logo on the line) */}
        <div className="relative flex justify-center md:pt-1">
          <motion.div
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/10 p-1 shadow-[0_0_14px_rgba(255,255,255,0.18)] backdrop-blur md:h-12 md:w-12"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            {link ? (
              <a href={link} target="_blank" rel="noreferrer" className="block h-full w-full">
                <img src={logo} alt="logo" className="h-full w-full rounded-full object-contain" />
              </a>
            ) : (
              <img src={logo} alt="logo" className="h-full w-full rounded-full object-contain" />
            )}
          </motion.div>
        </div>

        {/* Right column (content when aligned right) */}
        <div className={align === 'right' ? 'md:pl-4' : 'md:pl-4 md:opacity-0 md:pointer-events-none'} aria-hidden={align !== 'right'}>
          {align === 'right' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/25 bg-white/[0.05] px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur"
            >
              <Wrapper {...wrapperProps} className={link ? 'block focus:outline-none' : undefined}>
                <div className="flex flex-row flex-wrap items-baseline gap-x-3 gap-y-1 md:flex-col md:gap-1.5">
                  <span className="text-[11px] uppercase tracking-wide text-white/50">{date}</span>
                  <p className="text-[13px] text-white/65">{org}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-white/95">{title}</h3>
                  <ul className="mt-1.5 space-y-1 text-[13px] text-white/75">
                    {points.map((p, i) => (
                      <li key={i} className="leading-relaxed">
                        • {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {skills.length > 0 ? (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/20 bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/75">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Wrapper>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* Mobile: stacked card with logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="md:hidden"
      >
        <div className="flex items-start gap-4 rounded-2xl border border-white/25 bg-white/[0.05] px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/10 p-1 shadow-[0_0_12px_rgba(255,255,255,0.18)]">
            {link ? (
              <a href={link} target="_blank" rel="noreferrer" className="block h-full w-full">
                <img src={logo} alt="logo" className="h-full w-full rounded-full object-contain" />
              </a>
            ) : (
              <img src={logo} alt="logo" className="h-full w-full rounded-full object-contain" />
            )}
          </div>
          <div className="flex-1">
            <Wrapper {...wrapperProps} className={link ? 'block focus:outline-none' : undefined}>
              <div className="flex flex-row flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[11px] uppercase tracking-wide text-white/50">{date}</span>
                <p className="text-[13px] text-white/65">{org}</p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white/95">{title}</h3>
                <ul className="mt-1.5 space-y-1 text-[13px] text-white/75">
                  {points.map((p, i) => (
                    <li key={i} className="leading-relaxed">
                      • {p}
                    </li>
                  ))}
                </ul>
              </div>
              {skills.length > 0 ? (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/20 bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/75">
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
            </Wrapper>
          </div>
        </div>
      </motion.div>
    </li>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative mx-auto mt-5 max-w-12xl">
        <div className="absolute left-1/2 top-8 hidden h-[calc(100%-2rem)] w-[2px] -translate-x-1/2 bg-gradient-to-b from-white/40 via-white/50 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.25)] md:block" />
        <ul className="space-y-0.5">
          {EXPERIENCE.map((e, idx) => (
            <TimelineItem key={idx} {...e} align={idx % 2 === 0 ? 'left' : 'right'} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
