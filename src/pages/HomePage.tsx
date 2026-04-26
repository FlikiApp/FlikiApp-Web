import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo'
import StructuredData from '../components/StructuredData'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionKicker from '../components/ui/SectionKicker'
import GradientText from '../components/ui/GradientText'
import AppStoreButton from '../components/ui/AppStoreButton'
import FeatureCard from '../components/ui/FeatureCard'
import DustMotes from '../components/ui/DustMotes'
import PhoneMockup from '../components/ui/PhoneMockup'
import PickBattle from '../components/ui/PickBattle'
import SplitText from '../components/ui/SplitText'
import TrendingToday from '../components/ui/TrendingToday'
import homeScreenshot from '../components/screenshots/home.png'
import { HOW_IT_WORKS_STEPS, FEATURES } from '../lib/constants'

export default function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  // Backdrop layers drift at different rates so they feel like
  // parallax planes behind the scrolling content.
  const rawGlowY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const rawVignetteY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  // Phone leans forward and grows as the hero scrolls past —
  // turns to the right and nearly pops off the screen.
  const rawPhoneScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.4])
  const rawPhoneRotateY = useTransform(scrollYProgress, [0, 0.3], [0, 18])
  const rawPhoneRotateZ = useTransform(scrollYProgress, [0, 0.3], [0, 4])
  // Shift the phone down as it scales so its top edge stays well
  // below the navbar even at peak scale.
  const rawPhoneY = useTransform(scrollYProgress, [0, 0.3], [0, 90])

  const glowY = prefersReducedMotion ? '0%' : rawGlowY
  const vignetteY = prefersReducedMotion ? '0%' : rawVignetteY
  const phoneScale = prefersReducedMotion ? 1 : rawPhoneScale
  const phoneRotateY = prefersReducedMotion ? 0 : rawPhoneRotateY
  const phoneRotateZ = prefersReducedMotion ? 0 : rawPhoneRotateZ
  const phoneY = prefersReducedMotion ? 0 : rawPhoneY

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
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-24 md:pt-36 pb-56 md:pb-64"
      >
        {/* Cinematic backdrop — warm bloom + subtle second light source (parallax) */}
        <motion.div
          aria-hidden
          style={{
            y: glowY,
            background:
              'radial-gradient(70% 55% at 78% 45%, rgba(242,106,58,0.22) 0%, rgba(242,106,58,0) 60%), radial-gradient(50% 40% at 15% 85%, rgba(245,166,35,0.10) 0%, rgba(245,166,35,0) 60%)',
          }}
          className="pointer-events-none absolute inset-0 -z-10 will-change-transform"
        />
        {/* Faint scanline / vignette frame to evoke a cinema projection */}
        <motion.div
          aria-hidden
          style={{
            y: vignetteY,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.35) 100%)',
          }}
          className="pointer-events-none absolute inset-0 -z-10 will-change-transform"
        />
        {/* Dust motes drifting through the warm light */}
        <DustMotes count={28} className="-z-10" />
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                <SplitText delay={0.1} stagger={0.07} duration={0.7} className="block">
                  Rank movies & TV shows <GradientText>your way</GradientText>
                </SplitText>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="text-text-secondary text-lg max-w-md mb-10 leading-relaxed"
              >
                Ditch star ratings. Use head-to-head comparisons to build rankings that actually reflect your taste.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center lg:justify-start"
              >
                <AppStoreButton />
              </motion.div>
            </div>

            {/* Phone — scroll-driven lean and zoom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
              style={{ perspective: 1400 }}
            >
              <motion.div
                style={{
                  scale: phoneScale,
                  rotateY: phoneRotateY,
                  rotateZ: phoneRotateZ,
                  y: phoneY,
                  transformStyle: 'preserve-3d',
                }}
                className="will-change-transform"
              >
                <PhoneMockup screenshot={homeScreenshot} priority />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Today */}
      <TrendingToday />

      {/* Interactive pick-battle demo */}
      <PickBattle />

      {/* How It Works */}
      <SectionWrapper className="border-t border-border-subtle">
        <AnimatedSection>
          <SectionKicker>How It Works</SectionKicker>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Three steps to your{' '}
            <GradientText>definitive ranking</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="group relative pt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/60 via-border-subtle to-transparent transition-[background-image] duration-500 group-hover:from-accent" />
                <span
                  aria-hidden
                  className="font-display text-7xl leading-none tracking-tight bg-clip-text text-transparent block mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-1"
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
          <SectionKicker>Features</SectionKicker>
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
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
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
