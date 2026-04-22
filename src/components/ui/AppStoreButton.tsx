import { APP_STORE_URL } from '../../lib/constants'

interface AppStoreButtonProps {
  className?: string
}

export default function AppStoreButton({ className = '' }: AppStoreButtonProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl font-medium text-base text-text-primary overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.4) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 14px 40px -12px rgba(242,106,58,0.45)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      }}
    >
      {/* Warm sheen that intensifies on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120% 90% at 20% 0%, rgba(242,106,58,0.28) 0%, rgba(242,106,58,0) 60%)',
        }}
      />
      {/* Specular sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
        }}
      />
      <svg viewBox="0 0 24 24" className="relative w-5 h-5 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="relative flex flex-col leading-tight">
        <span className="text-[10px] font-normal opacity-70">Download on the</span>
        <span className="text-sm font-semibold -mt-0.5">App Store</span>
      </div>
    </a>
  )
}
