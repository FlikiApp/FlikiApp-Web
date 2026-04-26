import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionKicker from '../components/ui/SectionKicker'

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Privacy Policy — Fliki"
        description="How Fliki collects, uses, and protects your data."
        path="/privacy"
      />
      <SectionWrapper>
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <SectionKicker>Legal</SectionKicker>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-text-muted text-sm mb-12">Last updated: March 2026</p>

            <div className="space-y-10 text-text-secondary leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">1. Information We Collect</h2>
                <p>
                  When you create an account, we collect your email address, display name, and profile information you choose to provide. We also collect data about your ranking activity, including comparisons made, rankings generated, and social interactions within the app.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">2. How We Use Your Information</h2>
                <p>
                  We use your information to provide and improve the Fliki service, personalize your experience, generate recommendations, and facilitate social features such as friend comparisons and discussions.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">3. Data Sharing</h2>
                <p>
                  We do not sell your personal information to third parties. We may share anonymized, aggregated data for analytics purposes. Your rankings and profile information are visible to other users according to your privacy settings.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your personal information, including encryption in transit and at rest. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">5. Your Rights</h2>
                <p>
                  You may access, update, or delete your account information at any time through the app settings. You may also request a complete export of your data or account deletion by contacting our support team.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">6. Cookies & Analytics</h2>
                <p>
                  Our website uses essential cookies for functionality. We use privacy-respecting analytics to understand how users interact with our service. You can opt out of non-essential tracking at any time.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">7. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy, please contact us at{' '}
                  <a
                    href="mailto:privacy@flikiapp.com"
                    className="relative text-accent inline-block rounded-sm after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-primary"
                  >
                    privacy@flikiapp.com
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
