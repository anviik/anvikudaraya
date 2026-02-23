import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <motion.div
        className="absolute -left-48 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(255,182,213,0.45),_transparent_70%)] blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(154,201,255,0.45),_transparent_70%)] blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-140px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(203,165,255,0.35),_transparent_70%)] blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black" />
    </div>
  )
}
