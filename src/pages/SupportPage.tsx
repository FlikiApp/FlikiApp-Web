import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import GradientText from '../components/ui/GradientText'
import { SUPPORT_FAQS } from '../lib/constants'

export default function SupportPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Support — Fliki"
        description="Answers to common questions about Fliki, plus how to contact support."
        path="/support"
      />
      {/* Header */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Support</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              How can we <GradientText>help</GradientText>?
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Have a question, found a bug, or just want to say hi? We're here for you.
            </p>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper className="border-t border-border-subtle">
        <AnimatedSection>
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">Contact Us</p>
          <h2 className="text-3xl font-bold tracking-tight mb-14">
            Get in <GradientText>touch</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'General Support',
              description: 'Questions about your account, rankings, or the app in general.',
              email: 'support@flikiapp.com',
            },
            {
              title: 'Bug Reports',
              description: 'Something not working right? Let us know and we\'ll look into it.',
              email: 'bugs@flikiapp.com',
            },
            {
              title: 'Feedback',
              description: 'Ideas for new features or ways we can improve Fliki.',
              email: 'feedback@flikiapp.com',
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="group relative pt-6 h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle transition-colors duration-300 group-hover:bg-accent/60" />
                <h3 className="text-base font-semibold mb-2 transition-colors duration-300 group-hover:text-accent">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
                <a
                  href={`mailto:${item.email}`}
                  className="relative text-accent text-sm font-medium inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {item.email}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="border-t border-border-subtle">
        <AnimatedSection>
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight mb-14">
            Frequently asked <GradientText>questions</GradientText>
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl space-y-8">
          {SUPPORT_FAQS.map((faq, i) => (
            <AnimatedSection key={faq.question} delay={i * 0.06}>
              <div className="group relative pt-6">
                <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle transition-all duration-300 group-hover:bg-accent/60" />
                <h3 className="text-base font-semibold mb-2 transition-colors duration-300 group-hover:text-accent">{faq.question}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </motion.div>
  )
}
