import type { LucideIcon } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="bg-surface-card border border-border-subtle rounded-2xl p-6 hover:border-fliki-blue/40 transition-all duration-300 h-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fliki-cyan/20 to-fliki-purple/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-fliki-cyan" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  )
}
