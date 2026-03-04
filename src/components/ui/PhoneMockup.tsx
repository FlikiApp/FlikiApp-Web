interface PhoneMockupProps {
  className?: string
}

export default function PhoneMockup({ className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[260px] h-[520px] mx-auto">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-border-subtle bg-surface-secondary shadow-lg overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-text-primary rounded-full z-10" />

          {/* Screen content */}
          <div className="absolute inset-2 rounded-[2.2rem] overflow-hidden bg-white">
            <div className="pt-14 px-5 space-y-4">
              {/* Header */}
              <div className="h-3 w-16 bg-gray-200 rounded-full" />
              <div className="h-5 w-32 bg-gray-100 rounded-lg" />

              {/* Comparison cards */}
              <div className="mt-4 space-y-2.5">
                <div className="bg-surface-secondary rounded-xl p-3 border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-13 rounded-lg bg-accent/10" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-2.5 w-20 bg-gray-200 rounded-full" />
                      <div className="h-2 w-14 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-text-primary flex items-center justify-center text-[10px] font-bold text-white">
                    VS
                  </div>
                </div>

                <div className="bg-surface-secondary rounded-xl p-3 border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-13 rounded-lg bg-accent/10" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-2.5 w-24 bg-gray-200 rounded-full" />
                      <div className="h-2 w-12 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ranking bars */}
              <div className="mt-5 space-y-2">
                <div className="h-2 w-full bg-accent/20 rounded-full" />
                <div className="h-2 w-4/5 bg-accent/15 rounded-full" />
                <div className="h-2 w-3/5 bg-accent/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
