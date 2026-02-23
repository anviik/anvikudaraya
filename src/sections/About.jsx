import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'
import { container, item } from '../lib/anim.js'
import SKILLS from '../data/skills.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocument } from 'react-icons/hi'

export default function About() {
  return (
    <Section id="about" title="About me">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
 
        <motion.div className="sm:col-span-3 text-center md:text-left" variants={item}>
          <p className="text-pretty text-[15px] leading-relaxed text-white/75 md:max-w-2xl">
            Computer Science &amp; Engineering + Cognitive Science double major at UC Merced. Passionate about building impactful software solutions and exploring the intersection of technology and human behavior. Experienced in full-stack development, AI/ML, and product management. Especially interested in AI.
          </p>

     
          <motion.ul
            className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-6"
            variants={container}
          >
            {SKILLS.map((s) => (
              <motion.li
                key={s.name}
                variants={item}
                className="group flex flex-col items-center gap-2"
              >
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-transparent p-2 shadow-sm transition hover:border-white/25 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)]">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    <s.icon
                      className="h-10 w-10 md:h-12 md:w-12"
                      style={{ color: s.color || 'rgba(255,255,255,0.8)' }}
                      aria-hidden="true"
                    />
                  </motion.div>
                </div>
                <span className="text-xs text-white/65">{s.name}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Social links */}
         
        </motion.div>

        {/* Right: headshot */}
        <motion.div className="flex-shrink-0" variants={item}>
          {/* Use public path for deploy-safe image loading */}
          <motion.img
            src="/tech/AnviKudarayaHeadshot.jpg"
            alt="Anvi Kudaraya headshot"
            className="w-48 h-48 rounded-full object-cover"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />
        </motion.div>
      </motion.div>
    </Section>
  )
}
