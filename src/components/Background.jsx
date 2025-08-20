import { motion } from 'framer-motion'

export default function Background() {
  const bubbles = [
    { top: '8%', left: '10%', size: 280, dx: 60, dy: 35, d: 36 },
    { top: '20%', left: '45%', size: 340, dx: -50, dy: 40, d: 42 },
    { top: '65%', left: '20%', size: 320, dx: 40, dy: -45, d: 48 },
    { top: '70%', left: '70%', size: 360, dx: -35, dy: 30, d: 40 },
    { top: '35%', left: '80%', size: 260, dx: -45, dy: 35, d: 38 },
    { top: '5%', left: '75%', size: 220, dx: 30, dy: -30, d: 34 },
    { top: '40%', left: '15%', size: 240, dx: -30, dy: 25, d: 46 },
    { top: '85%', left: '45%', size: 300, dx: 35, dy: -35, d: 44 }
  ]

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.08),transparent_60%)]" />
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-pink-400/20 blur-3xl"
          style={{ top: b.top, left: b.left, width: b.size, height: b.size }}
          animate={{ x: [0, b.dx, -b.dx * 0.4, 0], y: [0, b.dy, -b.dy * 0.4, 0] }}
          transition={{ duration: b.d, repeat: Infinity, repeatType: 'mirror', ease: 'linear', delay: i * 1.2 }}
        />
      ))}
    </div>
  )
}
