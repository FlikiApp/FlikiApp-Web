import { motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import GradientText from '../components/ui/GradientText'
import AppStoreButton from '../components/ui/AppStoreButton'
import FeatureCard from '../components/ui/FeatureCard'
import PhoneMockup from '../components/ui/PhoneMockup'
import homeScreenshot from '../components/screenshots/home.png'
import { HOW_IT_WORKS_STEPS, FEATURES } from '../lib/constants'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
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
              <div>
                <span className="text-xs font-medium text-text-muted mb-4 block">0{i + 1}</span>
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
      <section className="py-32 md:py-40 border-t border-border-subtle">
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
