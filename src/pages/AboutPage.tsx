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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              About <GradientText>Fliki</GradientText>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              We believe star ratings are broken. A 4-star movie tells you nothing about whether you'd pick it over your all-time favorite. Fliki replaces vague scores with a simple question: <em className="text-text-primary">which do you prefer?</em>
            </p>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper className="bg-surface-secondary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Fliki started with a late-night argument: "Is The Dark Knight better than Inception?" Star ratings said they were equal. We knew they weren't — at least not for us.
              </p>
              <p>
                So we built an app that captures those gut-feeling decisions. Using an Elo system inspired by chess rankings, Fliki turns quick head-to-head picks into a precise, personal ranking of everything you've watched.
              </p>
              <p>
                Today, Fliki is a growing community of cinephiles who rank, compare, predict, and debate — all without the noise of a 10-point scale.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-surface-card border border-border-subtle rounded-2xl p-8">
              <div className="text-center">
                <div className="text-5xl font-extrabold mb-2">
                  <GradientText>1 vs 1</GradientText>
                </div>
                <p className="text-text-secondary text-sm mb-6">
                  One matchup at a time. That's all it takes.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-text-primary">500K+</div>
                    <div className="text-xs text-text-muted">Titles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">Elo</div>
                    <div className="text-xs text-text-muted">Algorithm</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">0</div>
                    <div className="text-xs text-text-muted">Star Ratings</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the <GradientText>Team</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <div className="bg-surface-card border border-border-subtle rounded-2xl p-6 text-center hover:border-fliki-blue/40 transition-colors">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-fliki-cyan/20 to-fliki-purple/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-fliki-cyan">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-fliki-cyan text-sm mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-surface-secondary">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            What We <GradientText>Stand For</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.1}>
              <div className="bg-surface-card border border-border-subtle rounded-2xl p-6 hover:border-fliki-blue/40 transition-colors h-full">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join the <GradientText>Community</GradientText>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              Download Fliki and start building your definitive ranking.
            </p>
            <AppStoreButton />
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </motion.div>
  )
}
