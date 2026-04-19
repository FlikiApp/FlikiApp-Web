import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import useScrollToTop from '../../hooks/useScrollToTop'

export default function Layout() {
  useScrollToTop()
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Cinematic warm flash that pulses on every route change */}
      <AnimatePresence>
        <motion.div
          key={`flash-${location.pathname}`}
          aria-hidden
          initial={{ opacity: 0.55 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-0 z-[90]"
          style={{
            background:
              'radial-gradient(70% 50% at 50% 40%, rgba(242,106,58,0.28) 0%, rgba(242,106,58,0) 60%)',
            mixBlendMode: 'screen',
          }}
        />
      </AnimatePresence>
    </div>
  )
}
