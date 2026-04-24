import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import GradientText from '../components/ui/GradientText'
import AppStoreButton from '../components/ui/AppStoreButton'
import CountUp from '../components/ui/CountUp'
import Tilt from '../components/ui/Tilt'
import { TEAM_MEMBERS, VALUES } from '../lib/constants'
import memeImage from '../components/screenshots/meme.png'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="About — Fliki"
        description="Why we think star ratings are broken, who's building Fliki, and the values behind the app."
        path="/about"
      />
      {/* Mission */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div>
              <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">About</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                We believe star ratings are{' '}
                <GradientText>broken</GradientText>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                A 4-star movie tells you nothing about whether you'd pick it over your all-time favorite. Fliki replaces vague scores with a simple question: <em className="text-text-primary not-italic font-medium">which do you prefer?</em>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <img
              src={memeImage}
              alt="Fake cinephile vs true cinephile meme"
              className="rounded-2xl w-full"
            />
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper className="border-t border-border-subtle">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Our Story</p>
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Fliki started with a late-night argument: "Is The Dark Knight better than Inception?" Star ratings said they were equal. We knew they weren't — at least not for us.
              </p>
              <p>
                So we built an app that captures those gut-feeling decisions. Fliki turns quick head-to-head picks into a precise, personal ranking of everything you've watched.
              </p>
              <p>
                Today, Fliki is a growing community of cinephiles who rank, compare, predict, and debate — all without the noise of a 10-point scale.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <Tilt maxTilt={7} lift={3} glare>
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px -30px rgba(0,0,0,0.8)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(80% 60% at 50% 0%, rgba(242,106,58,0.18) 0%, rgba(242,106,58,0) 70%)',
                }}
              />
              <div className="relative text-center">
                <div className="text-5xl font-bold font-serif italic mb-2 bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(105deg, #F26A3A 0%, #F5A623 60%, #FFD39B 100%)' }}
                >
                  1 vs 1
                </div>
                <p className="text-text-secondary text-sm mb-8">
                  One matchup at a time. That's all it takes.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center border-t border-border-subtle pt-6">
                  <div>
                    <CountUp
                      to={500}
                      duration={1.8}
                      format={(n) => `${Math.round(n)}K+`}
                      className="text-xl font-bold text-text-primary tabular-nums"
                    />
                    <div className="text-xs text-text-muted mt-1">Titles</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-text-primary">1v1</div>
                    <div className="text-xs text-text-muted mt-1">Algorithm</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-text-primary">0</div>
                    <div className="text-xs text-text-muted mt-1">Star Ratings</div>
                  </div>
                </div>
              </div>
            </div>
            </Tilt>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="border-t border-border-subtle">
        <AnimatedSection>
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Team</p>
          <h2 className="text-3xl font-bold tracking-tight mb-14">
            The people behind <GradientText>Fliki</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <div className="group relative pt-6">
                <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle transition-colors duration-300 group-hover:bg-accent/60" />
                <div
                  className="w-12 h-12 rounded-full bg-surface-secondary flex items-center justify-center mb-4 ring-1 ring-border-subtle transition-all duration-300 group-hover:ring-accent/60 group-hover:shadow-[0_0_24px_-4px_rgba(242,106,58,0.35)]"
                >
                  <span className="text-lg font-semibold text-text-secondary transition-colors duration-300 group-hover:text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-semibold transition-colors duration-300 group-hover:text-accent">{member.name}</h3>
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
              <div className="group relative pt-6 h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle transition-colors duration-300 group-hover:bg-accent/60" />
                <h3 className="text-base font-semibold tracking-tight mb-3 transition-colors duration-300 group-hover:text-accent">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-border-subtle">
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Join the <GradientText>community</GradientText>
            </h2>
            <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
              Download Fliki and start building your definitive ranking.
            </p>
            <AppStoreButton />
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
