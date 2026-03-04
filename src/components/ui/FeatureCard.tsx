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
    <AnimatedSection delay={index * 0.08}>
      <div className="border-t border-border-subtle pt-6 h-full">
        <Icon className="w-5 h-5 text-accent mb-4" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  )
}
