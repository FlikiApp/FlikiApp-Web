import { motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import GradientText from '../components/ui/GradientText'
import AppStoreButton from '../components/ui/AppStoreButton'
import { TEAM_MEMBERS, VALUES } from '../lib/constants'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mission */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">About</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              We believe star ratings are{' '}
              <GradientText>broken</GradientText>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              A 4-star movie tells you nothing about whether you'd pick it over your all-time favorite. SceneIt replaces vague scores with a simple question: <em className="text-text-primary not-italic font-medium">which do you prefer?</em>
            </p>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper className="border-t border-border-subtle">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Our Story</p>
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                SceneIt started with a late-night argument: "Is The Dark Knight better than Inception?" Star ratings said they were equal. We knew they weren't — at least not for us.
              </p>
              <p>
                So we built an app that captures those gut-feeling decisions. Using an Elo system inspired by chess rankings, SceneIt turns quick head-to-head picks into a precise, personal ranking of everything you've watched.
              </p>
              <p>
                Today, SceneIt is a growing community of cinephiles who rank, compare, predict, and debate — all without the noise of a 10-point scale.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="border border-border-subtle rounded-2xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold font-serif mb-2 text-text-primary">
                  1 vs 1
                </div>
                <p className="text-text-secondary text-sm mb-8">
                  One matchup at a time. That's all it takes.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center border-t border-border-subtle pt-6">
                  <div>
                    <div className="text-xl font-bold text-text-primary">500K+</div>
                    <div className="text-xs text-text-muted mt-1">Titles</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-text-primary">Elo</div>
                    <div className="text-xs text-text-muted mt-1">Algorithm</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-text-primary">0</div>
                    <div className="text-xs text-text-muted mt-1">Star Ratings</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="border-t border-border-subtle">
        <AnimatedSection>
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Team</p>
          <h2 className="text-3xl font-bold tracking-tight mb-14">
            The people behind <GradientText>SceneIt</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <div className="border-t border-border-subtle pt-6">
                <div className="w-12 h-12 rounded-full bg-surface-secondary flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-text-secondary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="border-t border-border-subtle">
        <AnimatedSection>
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Values</p>
          <h2 className="text-3xl font-bold tracking-tight mb-14">
            What we <GradientText>stand for</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUES.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.08}>
              <div className="border-t border-border-subtle pt-6 h-full">
                <h3 className="text-base font-semibold mb-2">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Join the <GradientText>community</GradientText>
            </h2>
            <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
              Download SceneIt and start building your definitive ranking.
            </p>
            <AppStoreButton />
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
