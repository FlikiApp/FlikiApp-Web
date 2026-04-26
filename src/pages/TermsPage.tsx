import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionKicker from '../components/ui/SectionKicker'

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Terms of Service — Fliki"
        description="The terms that govern your use of Fliki."
        path="/terms"
      />
      <SectionWrapper>
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <SectionKicker>Legal</SectionKicker>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Terms of Service
            </h1>
            <p className="text-text-muted text-sm mb-12">Last updated: March 2026</p>

            <div className="space-y-10 text-text-secondary leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Fliki, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">2. Use of Service</h2>
                <p>
                  Fliki provides a platform for ranking movies and TV shows through head-to-head comparisons. You must be at least 13 years old to use the service. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">3. User Content</h2>
                <p>
                  You retain ownership of content you create on Fliki, including rankings, reviews, and discussions. By posting content, you grant Fliki a non-exclusive license to display and distribute your content within the service.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">4. Prohibited Conduct</h2>
                <p>
                  You may not use Fliki to harass, abuse, or threaten other users. Spam, automated access, and any attempts to manipulate rankings through artificial means are strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">5. Intellectual Property</h2>
                <p>
                  The Fliki name, logo, and app design are the property of Fliki. Movie and TV show metadata is sourced from licensed databases and remains the property of their respective owners.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">6. Limitation of Liability</h2>
                <p>
                  Fliki is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">7. Changes to Terms</h2>
                <p>
                  We may update these terms from time to time. Continued use of Fliki after changes constitutes acceptance of the updated terms. We will notify users of significant changes via email or in-app notification.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">8. Contact</h2>
                <p>
                  For questions about these terms, contact us at{' '}
                  <a
                    href="mailto:legal@flikiapp.com"
                    className="relative text-accent inline-block rounded-sm after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-primary"
                  >
                    legal@flikiapp.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </motion.div>
  )
}
