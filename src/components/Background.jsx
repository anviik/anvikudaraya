import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(175, 16, 16, 0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.08),transparent_60%)]" />
      
    </div>
  )
}
