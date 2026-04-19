import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface DustMotesProps {
  count?: number
  className?: string
}

interface Mote {
  size: number
  left: number
  top: number
  drift: number
  duration: number
  delay: number
  opacity: number
}

// Deterministic pseudo-random so the motes are stable across renders
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export default function DustMotes({ count = 24, className = '' }: DustMotesProps) {
  const motes = useMemo<Mote[]>(() => {
    const rand = seeded(count * 31)
    return Array.from({ length: count }, () => ({
      size: 1 + rand() * 3,
      left: rand() * 100,
      top: rand() * 100,
      drift: 40 + rand() * 60,
      duration: 10 + rand() * 16,
      delay: -rand() * 20,
      opacity: 0.12 + rand() * 0.22,
    }))
  }, [count])

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {motes.map((m, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: m.size,
            height: m.size,
            left: `${m.left}%`,
            top: `${m.top}%`,
            background:
              'radial-gradient(circle, rgba(255, 214, 170, 0.9) 0%, rgba(245, 166, 35, 0.4) 50%, rgba(245, 166, 35, 0) 100%)',
            filter: 'blur(0.5px)',
            opacity: m.opacity,
          }}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, m.drift, -m.drift * 0.5, 0],
            y: [0, -m.drift * 1.2, -m.drift * 0.3, 0],
            opacity: [m.opacity, m.opacity * 1.8, m.opacity * 0.7, m.opacity],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
