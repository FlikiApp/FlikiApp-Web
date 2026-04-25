import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Seo from '../components/Seo'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionKicker from '../components/ui/SectionKicker'
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
            <SectionKicker>Support</SectionKicker>
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
          <SectionKicker>Contact Us</SectionKicker>
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
                <h3 className="text-base font-semibold tracking-tight mb-3 transition-colors duration-300 group-hover:text-accent">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
                <a
                  href={`mailto:${item.email}`}
                  className="relative text-accent text-sm font-medium inline-block rounded-sm after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-primary"
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
          <SectionKicker>FAQ</SectionKicker>
          <h2 className="text-3xl font-bold tracking-tight mb-14">
            Frequently asked <GradientText>questions</GradientText>
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl">
          <FAQAccordion />
        </div>
      </SectionWrapper>
    </motion.div>
  )
}

function FAQAccordion() {
  // First question open by default to hint at the interaction
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set([0]))

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div>
      {SUPPORT_FAQS.map((faq, i) => (
        <FAQItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          index={i}
          open={openSet.has(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  index: number
  open: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, index, open, onToggle }: FAQItemProps) {
  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="border-t border-border-subtle last:border-b">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="group w-full py-5 flex items-center justify-between gap-4 text-left rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
        >
          <h3
            className={`text-base font-semibold transition-colors duration-300 ${
              open ? 'text-accent' : 'text-text-primary group-hover:text-accent'
            }`}
          >
            {question}
          </h3>
          <motion.span
            aria-hidden
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`shrink-0 transition-colors duration-300 ${
              open ? 'text-accent' : 'text-text-muted group-hover:text-accent'
            }`}
          >
            <Plus className="w-5 h-5" strokeWidth={2} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.25, ease: 'easeOut' },
              }}
              className="overflow-hidden"
            >
              <p className="text-text-secondary text-sm leading-relaxed pb-6 pr-8">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
