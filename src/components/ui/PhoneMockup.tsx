import { motion } from 'framer-motion'

interface PhoneMockupProps {
  className?: string
  screenshot?: string
  /** When provided, the phone crossfades between these slots driven by activeIndex.
   *  Null slots render a "Coming Soon" panel instead of an image. */
  screenshots?: (string | null)[]
  activeIndex?: number
  comingSoon?: boolean
}

export default function PhoneMockup({
  className = '',
  screenshot,
  screenshots,
  activeIndex = 0,
  comingSoon,
}: PhoneMockupProps) {
  const hasStack = screenshots && screenshots.length > 0
  const hasImage = hasStack || Boolean(screenshot)

  return (
    <div className={`relative ${className}`}>
      {/* Warm ambient bloom behind the phone */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(closest-side, rgba(242,106,58,0.35), rgba(245,166,35,0.12) 55%, rgba(0,0,0,0) 75%)',
        }}
      />

      <div className="relative w-[260px] h-[540px] mx-auto">
        {/* Phone frame — subtle highlight ring + deep shadow */}
        <div
          className="absolute inset-0 rounded-[38px] overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, #2A2A30 0%, #141418 45%, #0A0A0D 100%)',
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(255,255,255,0.04), 0 30px 60px -15px rgba(0,0,0,0.7), 0 10px 30px -10px rgba(242,106,58,0.25)',
          }}
        >
          {/* Inner bezel highlight */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-[38px] pointer-events-none"
            style={{
              background:
                'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.03) 100%)',
            }}
          />

          {/* Dynamic Island (only show for placeholder) */}
          {!hasImage && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 border border-white/5" />
          )}

          {/* Screen content */}
          <div className="absolute inset-[6px] rounded-[32px] overflow-hidden bg-black">
            {hasStack ? (
              <>
                {screenshots!.map((src, i) =>
                  src ? (
                    <motion.img
                      key={`img-${i}`}
                      src={src}
                      alt=""
                      aria-hidden={i !== activeIndex}
                      initial={false}
                      animate={{ opacity: i === activeIndex ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  ) : (
                    <motion.div
                      key={`soon-${i}`}
                      aria-hidden={i !== activeIndex}
                      initial={false}
                      animate={{ opacity: i === activeIndex ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex items-center justify-center bg-surface-secondary"
                    >
                      <span className="text-text-muted text-lg font-semibold tracking-wide">
                        Coming Soon
                      </span>
                    </motion.div>
                  ),
                )}
              </>
            ) : screenshot ? (
              <img
                src={screenshot}
                alt="App screenshot"
                className="w-full h-full object-contain"
              />
            ) : comingSoon ? (
              <div className="flex items-center justify-center h-full bg-surface-secondary">
                <span className="text-text-muted text-lg font-semibold tracking-wide">Coming Soon</span>
              </div>
            ) : (
              <div className="pt-14 px-5 space-y-4 bg-surface-secondary h-full">
                <div className="h-3 w-16 bg-white/10 rounded-full" />
                <div className="h-5 w-32 bg-white/5 rounded-lg" />
              </div>
            )}

            {/* Subtle screen vignette */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 40%), linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.25) 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
