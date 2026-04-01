interface PhoneMockupProps {
  className?: string
  screenshot?: string
  comingSoon?: boolean
}

export default function PhoneMockup({ className = '', screenshot, comingSoon }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[260px] h-[540px] mx-auto">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[25px] border border-border-subtle bg-surface-secondary shadow-lg overflow-hidden">
          {/* Dynamic Island (only show for placeholder) */}
          {!screenshot && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-text-primary rounded-full z-10" />
          )}

          {/* Screen content */}
          <div className="absolute inset-2 rounded-[17px] overflow-hidden bg-white">
            {screenshot ? (
              <img
                src={screenshot}
                alt="App screenshot"
                className="w-full h-full object-cover"
              />
            ) : comingSoon ? (
              <div className="flex items-center justify-center h-full">
                <span className="text-text-muted text-lg font-semibold tracking-wide">Coming Soon</span>
              </div>
            ) : (
              <div className="pt-14 px-5 space-y-4">
                <div className="h-3 w-16 bg-gray-200 rounded-full" />
                <div className="h-5 w-32 bg-gray-100 rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
