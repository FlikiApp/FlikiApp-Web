interface PhoneMockupProps {
  className?: string
}

export default function PhoneMockup({ className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[280px] h-[560px] mx-auto">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[3rem] border-[3px] border-white/10 bg-surface-card shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-surface-primary rounded-b-2xl z-10" />

          {/* Screen content */}
          <div className="absolute inset-3 rounded-[2.4rem] overflow-hidden bg-gradient-to-b from-fliki-cyan/10 via-fliki-blue/5 to-fliki-purple/10">
            {/* Fake UI elements */}
            <div className="pt-12 px-4 space-y-4">
              <div className="h-3 w-20 bg-white/10 rounded-full" />
              <div className="h-6 w-36 bg-gradient-to-r from-fliki-cyan/30 to-fliki-blue/30 rounded-lg" />

              {/* Fake comparison cards */}
              <div className="mt-6 space-y-3">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-fliki-cyan/20 to-fliki-blue/20" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-2.5 w-24 bg-white/15 rounded-full" />
                      <div className="h-2 w-16 bg-white/8 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fliki-cyan to-fliki-blue flex items-center justify-center text-xs font-bold text-black">
                    VS
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-fliki-blue/20 to-fliki-purple/20" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-2.5 w-28 bg-white/15 rounded-full" />
                      <div className="h-2 w-14 bg-white/8 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fake ranking bars */}
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full bg-gradient-to-r from-fliki-cyan/30 to-fliki-blue/20 rounded-full" />
                <div className="h-2 w-4/5 bg-gradient-to-r from-fliki-blue/30 to-fliki-purple/20 rounded-full" />
                <div className="h-2 w-3/5 bg-gradient-to-r from-fliki-purple/30 to-fliki-cyan/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
