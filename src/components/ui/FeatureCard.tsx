import AnimatedSection from './AnimatedSection'

interface FeatureCardProps {
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="border-t border-border-subtle pt-6 h-full">
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  )
}
