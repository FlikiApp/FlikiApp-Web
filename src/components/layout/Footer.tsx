import { Link, useLocation } from 'react-router'
import { Instagram } from 'lucide-react'
import FlikiLogo from '../icons/FlikiLogo'
import {
  FOOTER_PRODUCT_LINKS,
  FOOTER_LEGAL_LINKS,
  INSTAGRAM_URL,
} from '../../lib/constants'

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <FlikiLogo className="h-6" />
            <p className="mt-2 text-text-muted text-sm">
              Rank movies & TV shows your way.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {[...FOOTER_PRODUCT_LINKS, ...FOOTER_LEGAL_LINKS].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={pathname === link.path ? 'page' : undefined}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Fliki. All rights reserved.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fliki on Instagram"
            className="text-text-secondary hover:text-text-primary transition-colors rounded-md p-1 -m-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
