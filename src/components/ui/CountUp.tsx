import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  to: number
  duration?: number
  format?: (n: number) => string
  className?: string
}

export default function CountUp({
  to,
  duration = 1.8,
  format,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(format ? format(0) : '0')

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion) {
      setDisplay(format ? format(to) : Math.round(to).toLocaleString())
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(format ? format(v) : Math.round(v).toLocaleString()),
    })
    return () => controls.stop()
  }, [inView, to, duration, format, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
