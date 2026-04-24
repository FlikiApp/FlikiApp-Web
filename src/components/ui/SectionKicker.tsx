import { motion } from 'framer-motion'

interface SectionKickerProps {
  children: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

/**
 * Small uppercase label that precedes section headings. A thin accent bar
 * scales in alongside it on scroll so the kicker arrives with a bit of weight
 * instead of just fading.
 */
export default function SectionKicker({
  children,
  align = 'left',
  className = '',
}: SectionKickerProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${
        align === 'center' ? 'justify-center' : ''
      } ${className}`}
    >
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="block h-px w-10 bg-accent origin-left"
      />
      <p className="text-text-muted text-xs font-medium uppercase tracking-widest">
        {children}
      </p>
    </div>
  )
}
