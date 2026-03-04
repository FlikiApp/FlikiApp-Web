import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const offsets = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimatedSectionProps) {
  const offset = offsets[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
