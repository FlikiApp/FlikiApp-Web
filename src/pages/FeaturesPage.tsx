import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionKicker from '../components/ui/SectionKicker'
import GradientText from '../components/ui/GradientText'
import PhoneMockup from '../components/ui/PhoneMockup'
import AppStoreButton from '../components/ui/AppStoreButton'
import { DETAILED_FEATURES } from '../lib/constants'

import rankScreenshot from '../components/screenshots/rank.png'
import homeScreenshot from '../components/screenshots/home.png'
import recommendationsScreenshot from '../components/screenshots/recommendations.png'
import discoverScreenshot from '../components/screenshots/discover.png'
import leaderboardScreenshot from '../components/screenshots/leaderboard.png'

const FEATURE_SCREENSHOTS: (string | null)[] = [
  homeScreenshot,
  rankScreenshot,
  discoverScreenshot,
  recommendationsScreenshot,
  leaderboardScreenshot,
  null,
]


export default function FeaturesPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Features — Fliki"
        description="Head-to-head ranking, social leaderboards, discovery across streaming services, and custom recommendations built around how you watch."
        path="/features"
      />
      {/* Page header */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="max-w-2xl">
            <SectionKicker>Features</SectionKicker>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
              Built for <GradientText>cinephiles</GradientText>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Everything you need to rank, discover, and discuss movies and TV shows — all in one app.
            </p>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Scroll-story: sticky phone on desktop, inline phones on mobile */}
      <section className="border-t border-border-subtle">
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div>
              {DETAILED_FEATURES.map((feature, i) => (
                <FeatureBlock
                  key={feature.title}
                  feature={feature}
                  index={i}
                  onInView={setActiveIndex}
                  mobileScreenshot={FEATURE_SCREENSHOTS[i]}
                />
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24 flex justify-center pt-12">
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                      background:
                        'radial-gradient(60% 50% at 50% 45%, rgba(242,106,58,0.18) 0%, rgba(242,106,58,0) 70%)',
                      transform: 'scale(1.6)',
                      filter: 'blur(8px)',
                    }}
                  />
                  <PhoneMockup
                    screenshots={FEATURE_SCREENSHOTS}
                    activeIndex={activeIndex}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-border-subtle">
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Experience every <GradientText>feature</GradientText>
            </h2>
            <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
              Download Fliki and start ranking today.
            </p>
            <AppStoreButton />
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}

interface FeatureBlockProps {
  feature: (typeof DETAILED_FEATURES)[number]
  index: number
  onInView: (index: number) => void
  mobileScreenshot: string | null
}

function FeatureBlock({ feature, index, onInView, mobileScreenshot }: FeatureBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Fire as soon as any part of the block enters the middle 20% of the viewport,
  // so the active feature switches near the reader's focal point.
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  useEffect(() => {
    if (inView) onInView(index)
  }, [inView, index, onInView])

  return (
    <div ref={ref} className="py-20 lg:py-32 first:pt-12 lg:first:pt-24">
      <AnimatedSection>
        <span className="text-xs font-medium text-accent uppercase tracking-widest">
          {feature.tagline}
        </span>
        <h2 className="text-3xl font-bold tracking-tight mt-3 mb-4">{feature.title}</h2>
        <p className="text-text-secondary leading-relaxed mb-8">{feature.description}</p>
        <ul className="space-y-3">
          {feature.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
              <span className="text-text-secondary text-sm">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Mobile-only inline phone so small screens still see the relevant screen */}
        <div className="lg:hidden mt-10 flex justify-center">
          <PhoneMockup
            screenshot={mobileScreenshot ?? undefined}
            comingSoon={!mobileScreenshot}
          />
        </div>
      </AnimatedSection>
    </div>
  )
}
