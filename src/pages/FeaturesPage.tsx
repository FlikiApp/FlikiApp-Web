import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import GradientText from '../components/ui/GradientText'
import PhoneMockup from '../components/ui/PhoneMockup'
import AppStoreButton from '../components/ui/AppStoreButton'
import { DETAILED_FEATURES } from '../lib/constants'

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
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Powerful <GradientText>Features</GradientText>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
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
            className={i % 2 === 0 ? 'bg-surface-secondary' : ''}
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                isReversed ? 'lg:direction-rtl' : ''
              }`}
            >
              <AnimatedSection
                direction={isReversed ? 'right' : 'left'}
                className={isReversed ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fliki-cyan/20 to-fliki-purple/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-fliki-cyan" />
                  </div>
                  <span className="text-xs font-semibold text-fliki-cyan uppercase tracking-wider">
                    {feature.tagline}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{feature.title}</h2>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-fliki-cyan mt-0.5 shrink-0" />
                      <span className="text-text-secondary text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection
                direction={isReversed ? 'left' : 'right'}
                className={isReversed ? 'lg:order-1' : ''}
              >
                <PhoneMockup />
              </AnimatedSection>
            </div>
          </SectionWrapper>
        )
      })}

      {/* CTA */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Experience Every <GradientText>Feature</GradientText>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              Download Fliki and start ranking today.
            </p>
            <AppStoreButton />
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </motion.div>
  )
}
