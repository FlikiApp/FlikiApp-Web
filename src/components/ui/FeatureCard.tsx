import AnimatedSection from './AnimatedSection'

interface FeatureCardProps {
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group relative pt-6 h-full">
        <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle transition-colors duration-300 group-hover:bg-accent/60" />
        <h3 className="text-lg font-semibold text-text-primary mb-2 transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  )
}
