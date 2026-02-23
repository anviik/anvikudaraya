import { motion } from 'framer-motion'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      {title ? (
        <motion.h2
          className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
      ) : null}
      {children}
    </section>
  )
}
