import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import StructuredData from '../components/StructuredData'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import GradientText from '../components/ui/GradientText'
import AppStoreButton from '../components/ui/AppStoreButton'
import FeatureCard from '../components/ui/FeatureCard'
import PhoneMockup from '../components/ui/PhoneMockup'
import TrendingToday from '../components/ui/TrendingToday'
import homeScreenshot from '../components/screenshots/home.png'
import { HOW_IT_WORKS_STEPS, FEATURES } from '../lib/constants'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Fliki — Rank Movies & TV Shows Your Way"
        description="Ditch star ratings. Use head-to-head comparisons to build personal movie and TV rankings that reflect your taste."
        path="/"
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Fliki',
          description:
            'Rank movies and TV shows with head-to-head comparisons and share your rankings with friends.',
          applicationCategory: 'EntertainmentApplication',
          operatingSystem: 'iOS',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          url: 'https://flikiapp.com',
          downloadUrl: 'https://apps.apple.com/app/fliki/id6760435711',
        }}
      />
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        {/* Cinematic backdrop — warm bloom + subtle second light source */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(70% 55% at 78% 45%, rgba(242,106,58,0.22) 0%, rgba(242,106,58,0) 60%), radial-gradient(50% 40% at 15% 85%, rgba(245,166,35,0.10) 0%, rgba(245,166,35,0) 60%)',
          }}
        />
        {/* Faint scanline / vignette frame to evoke a cinema projection */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.35) 100%)',
          }}
        />
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                Rank movies &amp; TV shows{' '}
                <GradientText>your way</GradientText>
              </h1>
              <p className="text-text-secondary text-lg max-w-md mb-10 leading-relaxed">
                Ditch star ratings. Use head-to-head comparisons to build rankings that actually reflect your taste.
              </p>
              <AppStoreButton />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup screenshot={homeScreenshot} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Today */}
      <TrendingToday />

      {/* How It Works */}
      <SectionWrapper className="border-t border-border-subtle">
        <AnimatedSection>
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Three steps to your{' '}
            <GradientText>definitive ranking</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="relative pt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/60 via-border-subtle to-transparent" />
                <span
                  aria-hidden
                  className="font-display text-7xl leading-none tracking-tight bg-clip-text text-transparent block mb-6"
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, rgba(242,106,58,0.9) 0%, rgba(245,166,35,0.35) 70%, rgba(245,166,35,0) 100%)',
                  }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Feature Highlights */}
      <SectionWrapper>
        <AnimatedSection>
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Everything you need to{' '}
            <GradientText>rank</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 border-t border-border-subtle overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 50%, rgba(242,106,58,0.15) 0%, rgba(242,106,58,0) 70%)',
          }}
        />
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to <GradientText>rank</GradientText>?
            </h2>
            <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
              Join cinephiles who rank with precision. Download Fliki and start comparing today.
            </p>
            <AppStoreButton />
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
