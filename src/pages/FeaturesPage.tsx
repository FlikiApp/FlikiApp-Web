import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
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
  recommendationsScreenshot,
  leaderboardScreenshot,
  null,
]

export default function FeaturesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Page header */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Features</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
              Built for <GradientText>cinephiles</GradientText>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Everything you need to rank, discover, and discuss movies and TV shows — all in one app.
            </p>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Alternating feature sections */}
      {DETAILED_FEATURES.map((feature, i) => {
        const isReversed = i % 2 === 1

        return (
          <SectionWrapper
            key={feature.title}
            className="border-t border-border-subtle"
          >
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center`}
            >
              <AnimatedSection
                direction={isReversed ? 'right' : 'left'}
                className={isReversed ? 'lg:order-2' : ''}
              >
                <div>
                  <span className="text-xs font-medium text-accent uppercase tracking-widest">
                    {feature.tagline}
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight mt-3 mb-4">{feature.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                        <span className="text-text-secondary text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection
                direction={isReversed ? 'left' : 'right'}
                className={isReversed ? 'lg:order-1' : ''}
              >
                <PhoneMockup screenshot={FEATURE_SCREENSHOTS[i] ?? undefined} comingSoon={!FEATURE_SCREENSHOTS[i]} />
              </AnimatedSection>
            </div>
          </SectionWrapper>
        )
      })}

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
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
