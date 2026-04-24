import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import FlikiLogo from '../icons/FlikiLogo'
import { NAV_LINKS, APP_STORE_URL } from '../../lib/constants'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.4 })

  const glass = scrolled || mobileOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        glass
          ? 'bg-surface-primary/70 border-b border-border-subtle backdrop-blur-xl backdrop-saturate-150'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        zIndex: 100,
      }}
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <FlikiLogo className="h-7" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative text-sm transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-primary ${
                    active ? 'text-text-primary font-medium' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ease-out ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA — liquid glass */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-text-primary overflow-hidden transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
              boxShadow:
                '0 1px 0 rgba(255,255,255,0.15) inset, 0 0 0 1px rgba(255,255,255,0.07), 0 10px 24px -12px rgba(242,106,58,0.4)',
              backdropFilter: 'blur(16px) saturate(160%)',
              WebkitBackdropFilter: 'blur(16px) saturate(160%)',
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(120% 90% at 20% 0%, rgba(242,106,58,0.28) 0%, rgba(242,106,58,0) 60%)',
              }}
            />
            <span className="relative">Download</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{
          scaleX: progress,
          background:
            'linear-gradient(90deg, rgba(242,106,58,0) 0%, #F26A3A 30%, #F5A623 70%, rgba(245,166,35,0) 100%)',
        }}
      />

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-0 right-0 bg-surface-primary/95 backdrop-blur-xl border-b border-border-subtle"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base transition-colors ${
                    pathname === link.path
                      ? 'text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 rounded-xl text-sm font-medium text-text-primary overflow-hidden"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.18) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px -12px rgba(242,106,58,0.45)',
                  backdropFilter: 'blur(18px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(18px) saturate(160%)',
                }}
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
