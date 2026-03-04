import { motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import GradientText from '../components/ui/GradientText'
import AppStoreButton from '../components/ui/AppStoreButton'
import FeatureCard from '../components/ui/FeatureCard'
import PhoneMockup from '../components/ui/PhoneMockup'
import { HOW_IT_WORKS_STEPS, FEATURES, STATS } from '../lib/constants'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-fliki-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fliki-purple/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-fliki-cyan/10 text-fliki-cyan text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-fliki-cyan/20">
                Now Available on iOS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Rank Movies & TV Shows{' '}
                <GradientText>Your Way</GradientText>
              </h1>
              <p className="text-text-secondary text-lg sm:text-xl max-w-lg mb-8 leading-relaxed">
                Ditch star ratings. Use Elo-powered head-to-head comparisons to build rankings that actually reflect your taste.
              </p>
              <AppStoreButton />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <SectionWrapper className="bg-surface-secondary">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            How It <GradientText>Works</GradientText>
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-14">
            Three simple steps to build your definitive ranking.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-fliki-cyan/20 to-fliki-purple/20 flex items-center justify-center mb-5">
                  <step.icon className="w-8 h-8 text-fliki-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Everything You Need to <GradientText>Rank</GradientText>
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-14">
            From head-to-head comparisons to social leaderboards, Fliki has it all.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="bg-surface-secondary">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold mb-1">
                  <GradientText>{stat.value}</GradientText>
                </div>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-gradient-to-r from-fliki-cyan/10 via-fliki-blue/10 to-fliki-purple/10 rounded-full blur-3xl" />
        </div>
        <div className="relative text-center px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <GradientText>Rank</GradientText>?
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              Join cinephiles who rank with precision. Download Fliki and start comparing today.
            </p>
            <AppStoreButton />
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
