import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto grid max-w-xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <input className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/50" placeholder="Name" />
          <input className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/50" placeholder="Email" />
        </div>
        <textarea rows={5} className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/50" placeholder="Message" />
        <button className="rounded-xl bg-white px-4 py-2 text-sm text-black transition hover:opacity-90">
          Send message
        </button>
      </motion.form>
    </Section>
  )
}
