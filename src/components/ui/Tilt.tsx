import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'

interface TiltProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  perspective?: number
  lift?: number
  glare?: boolean
}

/**
 * Wraps children in a container that tilts in 3D toward the cursor,
 * with spring smoothing. Sits still on touch devices where pointer
 * events don't fire. Optional warm glare highlight follows the cursor.
 */
export default function Tilt({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  lift = 0,
  glare = false,
}: TiltProps) {
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { stiffness: 180, damping: 22, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), spring)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), spring)
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-lift, lift]), spring)
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])
  const glareBg = useTransform(
    () =>
      `radial-gradient(40% 40% at ${glareX.get()} ${glareY.get()}, rgba(255,210,170,0.22) 0%, rgba(255,210,170,0) 60%)`,
  )

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      style={{ perspective }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative will-change-transform"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: glareBg,
              mixBlendMode: 'screen',
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
