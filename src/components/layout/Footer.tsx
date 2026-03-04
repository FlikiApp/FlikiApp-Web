import { Link } from 'react-router-dom'
import { Twitter, Instagram, Github } from 'lucide-react'
import FlikiLogo from '../icons/FlikiLogo'
import { FOOTER_PRODUCT_LINKS, FOOTER_LEGAL_LINKS } from '../../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <FlikiLogo className="text-2xl" />
            <p className="mt-3 text-text-secondary text-sm leading-relaxed">
              Rank movies & TV shows your way with Elo-powered head-to-head comparisons.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-2">
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-text-secondary hover:text-fliki-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-text-secondary hover:text-fliki-cyan transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="text-text-secondary hover:text-fliki-cyan transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border-subtle text-center">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Fliki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
