import { motion, type HTMLMotionProps } from 'framer-motion'
import { Children, isValidElement, cloneElement, type ReactNode } from 'react'

interface SplitTextProps extends Omit<HTMLMotionProps<'span'>, 'children'> {
  children: ReactNode
  delay?: number
  stagger?: number
  duration?: number
}

const container = (delay: number, stagger: number) => ({
  initial: {},
  animate: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

const item = (duration: number) => ({
  initial: { opacity: 0, y: '40%' },
  animate: {
    opacity: 1,
    y: '0%',
    transition: { duration, ease: [0.22, 1, 0.36, 1] as const },
  },
})

/**
 * Wraps every whitespace-delimited word of its children in a staggered
 * motion.span. Nested elements (e.g. <GradientText>) are preserved as a
 * single animated token so their children are not split apart.
 */
export default function SplitText({
  children,
  delay = 0,
  stagger = 0.06,
  duration = 0.7,
  ...rest
}: SplitTextProps) {
  return (
    <motion.span
      variants={container(delay, stagger)}
      initial="initial"
      animate="animate"
      {...rest}
    >
      {splitNodes(children, duration)}
    </motion.span>
  )
}

function splitNodes(children: ReactNode, duration: number): ReactNode {
  const out: ReactNode[] = []
  let key = 0

  Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      const words = child.split(/(\s+)/)
      for (const w of words) {
        if (w === '') continue
        if (/^\s+$/.test(w)) {
          out.push(w)
        } else {
          out.push(
            <span key={`w-${key++}`} className="inline-block overflow-hidden align-top">
              <motion.span variants={item(duration)} className="inline-block will-change-transform">
                {w}
              </motion.span>
            </span>,
          )
        }
      }
    } else if (isValidElement(child)) {
      // Animate nested elements (e.g. GradientText) as a single token
      out.push(
        <span key={`n-${key++}`} className="inline-block overflow-hidden align-top">
          <motion.span variants={item(duration)} className="inline-block will-change-transform">
            {cloneElement(child)}
          </motion.span>
        </span>,
      )
    }
  })

  return out
}
