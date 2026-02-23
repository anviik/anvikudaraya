import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <Section id="contact" title="">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-white/40"></span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white/95 sm:text-5xl">
          Contact
        </h2>
        <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          If you have any opportunities, want to collaborate, or just want to chat, feel free to reach out by email or message me on social media. I’m always happy to connect and I’ll get back to you when I can.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:anvikudaraya417@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/90 px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Email
            <span aria-hidden="true" className="text-lg">›</span>
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5 text-white/70">
          <a
            href="tel:+15105652631"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm transition hover:text-white"
            aria-label="Phone"
          >
            <FaPhone className="h-4 w-4" />
            +1 (510) 565-2631
          </a>
          <a
            href="https://www.linkedin.com/in/anvi-kudaraya-ba116320b/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/anviik"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          {/* <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            aria-label="Discord"
          >
            <FaDiscord className="h-6 w-6" />
          </a> */}
          {/* <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a> */}
        </div>
      </motion.div>
    </Section>
  )
}
